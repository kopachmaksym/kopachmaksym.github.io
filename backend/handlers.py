from buy_process import dp, bot
from config import PAYMENT_TOKEN
from aiogram.types import Message, LabeledPrice, PreCheckoutQuery
from aiogram.types.message import ContentType
import re
from keyboads import keyboard

@dp.message_handler(commands=['start'])
async def start(message: Message):
    await bot.send_message(message.chat.id, 'Будь ласка, виберіть опцію:', reply_markup=keyboard)

@dp.message_handler(content_types='web_app_data' )
async def buy_process(web_app_message):
    # print(web_app_message.web_app_data.data)
    m = re.search(r' <comment>.*<comment>', web_app_message.web_app_data.data)
    comment = m.group(0).replace('<comment>', '').strip()
    PRICE = []
    data = web_app_message.web_app_data.data.split('#')
    data = [i.split(':') for i in data]
    data.pop(0)
    # print(data)

    for item in data:
        if item[1] == '0':
            continue
        PRICE.append(LabeledPrice(label=f'{item[0]} x{item[1]}', amount=int(item[2])*int(item[1])*100))

    await bot.send_invoice(web_app_message.chat.id,
                           title='Покупка мікрочіпів',
                           description=f'Коментар: {comment}',
                           provider_token=PAYMENT_TOKEN,

                           currency='uah',
                           need_email=True,
                           need_phone_number=True,
                           need_shipping_address= True,
                           prices=PRICE,
                           # start_parameter='',
                           photo_url='https://encrypted-tbn0.gstatic.com/'
                                     'images?q=tbn:ANd9GcSxeOQ6x3CbY3R1lhNWI_s6dmi1Qcg7zocY_g&usqp=CAU',
                           payload='some_invoice')

@dp.pre_checkout_query_handler(lambda q:True)
async def checkout_process(pre_checkout_query: PreCheckoutQuery):
    # print(pre_checkout_query.id)
    await bot.answer_pre_checkout_query(pre_checkout_query.id, ok=True)

@dp.message_handler(content_types=ContentType.SUCCESSFUL_PAYMENT)
async def successful_payment(message: Message):
    await bot.send_message(message.chat.id, "Платіж успішний!")