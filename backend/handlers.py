from buy_process import dp, bot
from config import PAYMENT_TOKEN, CHAT_GROUP
from aiogram.types import Message, LabeledPrice, PreCheckoutQuery, InlineKeyboardMarkup, InlineKeyboardButton
from aiogram.types.message import ContentType
from keyboads import keyboard
from aiogram.dispatcher.filters import Text, Regexp
import re
from micro_number import find_path
data_post = {}
msg = ''

@dp.message_handler(commands=['start'])
async def start(message: Message):
    await bot.send_message(message.chat.id, 'Будь ласка, виберіть опцію:', reply_markup=keyboard)

@dp.message_handler(content_types='web_app_data')
async def buy_process(web_app_message):
    pr = {}
    PRICE = []

    m = re.search(r' <comment>.*<comment>', web_app_message.web_app_data.data)
    comment = m.group(0).replace('<comment>', '').strip()
    data = web_app_message.web_app_data.data.replace(m.group(0), '')
    data = data.split('#')
    data = [i.split(':') for i in data]
    data.pop(0)

    sum = 0
    for item in data:
        if item[1] == '0':
            continue
        PRICE.append(LabeledPrice(label=f'{item[0]} x{item[1]}', amount=int(item[2])*int(item[1])*100))
        pr[f'{item[0]} x{item[1]}'] = str(int(item[2])*int(item[1])*100) + ' UAH'
        sum += int(item[2])

    full_name, link = await get_name(web_app_message.from_user.id, web_app_message.chat.id)

    data_post['Статус'] = 'Не оплачено'
    data_post['Повне імя'] = full_name
    data_post['Товар'] = pr
    data_post['Ціна'] = str(sum) + " UAH"
    data_post['Коментарій'] = comment
    data_post['Контакт'] = link

    await bot.send_invoice(web_app_message.chat.id,
                           title='Покупка мікрочіпів',
                           description=f'Коментар: {comment}',
                           provider_token=PAYMENT_TOKEN,
                           currency='UAH',
                           need_email=True,
                           need_phone_number=True,
                           need_shipping_address=True,
                           prices=PRICE,
                           start_parameter='example',
                           photo_url='https://encrypted-tbn0.gstatic.com/'
                                     'images?q=tbn:ANd9GcSxeOQ6x3CbY3R1lhNWI_s6dmi1Qcg7zocY_g&usqp=CAU',
                           payload='some_invoice')

@dp.pre_checkout_query_handler(lambda q:True)
async def checkout_process(pre_checkout_query: PreCheckoutQuery):
    await bot.answer_pre_checkout_query(pre_checkout_query.id, ok=True)
    data_post['User ID'] = pre_checkout_query.from_user.id
    data_post['Телефон'] = pre_checkout_query.order_info.phone_number
    data_post['Пошта'] = pre_checkout_query.order_info.email
    data_post['Адресс'] = pre_checkout_query.order_info.shipping_address.to_python()
    await message_print()

@dp.message_handler(content_types=ContentType.SUCCESSFUL_PAYMENT)
async def successful_payment(message: Message):
    await bot.send_message(message.chat.id, "Платіж успішний!")
    data_post['Статус'] = 'Оплачено'
    await message_print()

async def message_print():
    ptext = ''
    global msg

    for key, value in data_post.items():
        if type(value) == dict:
            ptext += f'{key}: \n'
            for key2, value2 in value.items():
                ptext += f'\t\t\t-{key2.replace("_", " ").capitalize()}: {value2}\n'
        else:
            ptext += f'{key}: {value}\n'
    if data_post['Статус'] == 'Не оплачено' or data_post['Статус'] == 'Не оплачено. Помилка транзакції':
        if msg == '':
            msg = await bot.send_message(CHAT_GROUP, ptext, disable_notification=True)
        elif data_post['Статус'] != 'Не оплачено. Помилка транзакції':
                data_post['Статус'] = 'Не оплачено. Помилка транзакції'
                ptext = ptext.replace('Статус: Не оплачено', 'Статус: Не оплачено. Помилка транзакції')
                await bot.edit_message_text(chat_id= CHAT_GROUP, message_id= msg.message_id , text = ptext)
    else:
        await bot.edit_message_text(chat_id= CHAT_GROUP, message_id= msg.message_id , text = ptext)


async def get_name(user_id: int, chat_id: int):
    link = None
    chat_member = await bot.get_chat_member(chat_id, user_id)
    user = await bot.get_chat(user_id)
    full_name =chat_member.user.full_name
    if user.username:
        link = f'https://t.me/{user.username}'
    return full_name, link

@dp.message_handler(Text('Знайти за чіпом'))
async def get_animal_info(message):
    await bot.send_message(chat_id=message.chat.id , text = 'Введіть номер чіпа')


@dp.message_handler()
async def get_animal(message):
    if re.search('[0-9]{15}', message.text):
        res = find_path(message.text)
        if res == None:
            await bot.send_message(chat_id=message.chat.id, text= 'Некоректно введений номер чіпа')
        else:
            ikm = InlineKeyboardMarkup(row_width=1)
            ib = InlineKeyboardButton(text='Результат', web_app={'url': res})
            ikm.add(ib)
            await bot.send_message(chat_id=message.chat.id, text='Тварину знайдено', reply_markup=ikm)

