from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton, ReplyKeyboardMarkup, WebAppInfo
from aiogram.types import KeyboardButton
from aiogram.utils.callback_data import CallbackData

web_app = WebAppInfo(url='https://kopachmaksym.github.io/')

keyboard = ReplyKeyboardMarkup(
    keyboard=[
        [KeyboardButton(text='Купити', web_app=web_app)]
    ],
    resize_keyboard=True
)

cb = CallbackData('btn', 'action')
key = InlineKeyboardMarkup(
    inline_keyboard=[[InlineKeyboardButton('Pay', callback_data='btn:buy')]]
)