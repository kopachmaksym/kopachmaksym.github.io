import asyncio
from aiogram import Bot, Dispatcher, executor
from config import TOKEN

loop = asyncio.new_event_loop()
bot = Bot(TOKEN, parse_mode='html')
dp = Dispatcher(bot, loop)

# admin_loop = asyncio.new_event_loop()
# admin_bot = Bot(TOKEN, parse_mode='html')
# admin_dp = Dispatcher(admin_bot, admin_loop)

if __name__ == '__main__':
    from handlers import dp
    executor.start_polling(dp)
    # executor.start_polling(admin_dp)