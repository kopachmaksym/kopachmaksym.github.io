import telebot
import config

from telebot import types

bot = telebot.TeleBot(config.TOKEN)

@bot.message_handler(commands=['start'])
def welcome(message):

    markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
    lang1 = types.KeyboardButton("Ukrainian")
    lang2 = types.KeyboardButton("English")

    markup.add(lang1, lang2)

    bot.send_message(message.chat.id, "Please, select the language: ",
                     parse_mode='html', reply_markup=markup)

@bot.message_handler(content_types=['text'])
def menu(message):
    if message.chat.type == 'private':
        if message.text == 'English':

            markup = types.InlineKeyboardMarkup(row_width=2)
            item1 = types.InlineKeyboardButton("ℹ️ Information", callback_data='inf_eng')
            item2 = types.InlineKeyboardButton("💳 Buy", web_app=types.WebAppInfo('https://store.animal-id.net/en/catalog/tag-usa/67'))

            markup.add(item1, item2)

            bot.send_message(message.chat.id, "Hi, {0.first_name}!\nI'm <b>{1.first_name}</b>,"
                                              " bot which created for selling the goods from Telegram."
                                              "\n\nPress the button: ".format(
                         message.from_user, bot.get_me()),
                             parse_mode='html', reply_markup=markup)

        elif message.text == 'Ukrainian':

            markup = types.InlineKeyboardMarkup(row_width=2)
            item1 = types.InlineKeyboardButton("ℹ️ Інформація", callback_data='inf_ukr')
            item2 = types.InlineKeyboardButton("💳 Купити", web_app=types.WebAppInfo('https://store.animal-id.net/ua/catalog/tag-ua/66'))

            markup.add(item1, item2)

            types.WebAppInfo('https://store.animal-id.net/ua/catalog/tag-ua/66')
            bot.send_message(message.chat.id, "Привіт, {0.first_name}!\nЯ - <b>{1.first_name}</b>,"
                                              " бот створенний для продажу товарів через Телеграм."
                                              " \n\nВиберіть потрібну вам опцію: ".format(
                         message.from_user, bot.get_me()),
                     parse_mode='html', reply_markup=markup)


@bot.callback_query_handler(func=lambda call: True)
def callback_inline(call):
    try:
        if call.message:
            if call.data == 'good':
                bot.send_message(call.message.chat.id, 'Вот и отличненько 😊')
            elif call.data == 'bad':
                bot.send_message(call.message.chat.id, 'Бывает 😢')

            bot.answer_web_app_query()

            # remove inline buttons
            bot.edit_message_text(chat_id=call.message.chat.id, message_id=call.message.message_id, text="😊 Как дела?",
                                  reply_markup=None)

    except Exception as e:
        print(repr(e))

#https://store.animal-id.net/ua/catalog/tag-ua/66
#https://store.animal-id.net/en/catalog/tag-usa/67

# @bot.message_handler(content_types=['text'])
# def lalala(message):
#     if message.chat.type == 'private':
#         if message.text == 'ℹ️ Інформація':
#             bot.send_message(message.chat.id, str(random.randint(0, 100)))
#         elif message.text == '💳 Купити':
#
#             telebot.TeleBot.
#
#             # markup = types.InlineKeyboardMarkup(row_width=2)
#             # item1 = types.InlineKeyboardButton("Хорошо", callback_data='good')
#             # item2 = types.InlineKeyboardButton("Не очень", callback_data='bad')
#             #
#             # markup.add(item1, item2)
#             #
#             # bot.send_message(message.chat.id, 'Отлично, сам как?', reply_markup=markup)
#         else:
#             bot.send_message(message.chat.id, 'Я не знаю что ответить 😢')


# @bot.message_handler(content_types=['text'])
# def lalala(message):
#     if message.chat.type == 'private':
#         if message.text == '🎲 Рандомное число':
#             bot.send_message(message.chat.id, str(random.randint(0, 100)))
#         elif message.text == '😊 Как дела?':
#
#             markup = types.InlineKeyboardMarkup(row_width=2)
#             item1 = types.InlineKeyboardButton("Хорошо", callback_data='good')
#             item2 = types.InlineKeyboardButton("Не очень", callback_data='bad')
#
#             markup.add(item1, item2)
#
#             bot.send_message(message.chat.id, 'Отлично, сам как?', reply_markup=markup)
#         else:
#             bot.send_message(message.chat.id, 'Я не знаю что ответить 😢')

#
# @bot.callback_query_handler(func=lambda call: True)
# def callback_inline(call):
#     try:
#         if call.message:
#             if call.data == 'good':
#                 bot.send_message(call.message.chat.id, 'Вот и отличненько 😊')
#             elif call.data == 'bad':
#                 bot.send_message(call.message.chat.id, 'Бывает 😢')
#
#             # remove inline buttons
#             bot.edit_message_text(chat_id=call.message.chat.id, message_id=call.message.message_id, text="😊 Как дела?",
#                                   reply_markup=None)
#
#             # show alert
#             # bot.answer_callback_query(callback_query_id=call.id, show_alert=False,
#                                       # text="ЭТО ТЕСТОВОЕ УВЕДОМЛЕНИЕ!!11")
#
#     except Exception as e:
#         print(repr(e))


# RUN
bot.polling(none_stop=True)