import requests
from bs4 import BeautifulSoup

def find_path(code):
    url = f'https://animal-id.net/en/animal/search?search={code}'
    x = requests.get(url)

    soup = BeautifulSoup(x.text, 'html.parser')

    div = soup.find('div', {'class' : 'search__title'})
    # print(div)
    if div == None:
        return url
    else:
        return None