from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/search/{keyword}")
async def search_books(keyword: str):
    response = requests.get(f"https://www.googleapis.com/books/v1/volumes?q={keyword}")
    data = response.json()
    books = []

    for item in data['items']:
        book = {
            'id': item['id'],
            'title': item['volumeInfo']['title'],
            'authors': item['volumeInfo'].get('authors', []),
            'description': item['volumeInfo'].get('description', ''),
            'imageUrl': item['volumeInfo'].get('imageLinks', {}).get('thumbnail', '')
        }
        books.append(book)

    return {'books': books}
