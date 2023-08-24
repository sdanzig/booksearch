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

    for item in data.get('items', []):
        volume_info = item.get('volumeInfo', {})
        book = {
            'id': item.get('id', 'N/A'),
            'title': volume_info.get('title', 'Title not available'),
            'authors': volume_info.get('authors', ['Author(s) not available']),
            'description': volume_info.get('description', 'Description not available'),
            'imageUrl': volume_info.get('imageLinks', {}).get('thumbnail', 'URL not available')
        }
        books.append(book)

    return {'books': books}

