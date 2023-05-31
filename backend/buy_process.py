import asyncio
from aiogram import Bot, Dispatcher, executor
from config import TOKEN
import sqlite3

conn = sqlite3.connect('user_database.db')
cursor = conn.cursor()

# Create the 'users' table if it doesn't exist
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        user_id INTEGER PRIMARY KEY,
        is_bot INTEGER,
        first_name TEXT,
        last_name TEXT,
        username TEXT
    )
''')
conn.commit()

loop = asyncio.new_event_loop()
bot = Bot(TOKEN, parse_mode='html')
dp = Dispatcher(bot, loop)

if __name__ == '__main__':
    from handlers import dp
    executor.start_polling(dp)