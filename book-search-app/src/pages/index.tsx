import { useState, FormEvent } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';
import BookModal from '../components/BookModal';

type Book = {
    id: string;
    title: string;
    authors: string[];
    description: string;
    imageUrl: string;
};

const Home: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState<Book[]>([]);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);

    const fetchBooks = async () => {
        const response = await axios.get(`http://localhost:8000/search/${searchTerm}`);
        setBooks(response.data.books);
    };

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        fetchBooks();
    };

    const handleOpenModal = (book: Book) => {
        setSelectedBook(book);
    };

    const handleCloseModal = () => {
        setSelectedBook(null);
    };

    return (
        <div className="container mx-auto p-8 bg-gradient-to-r from-gray-100 via-blue-100 to-gray-100 shadow-lg">
            <h1 className="text-6xl font-bold mb-8 text-blue-800 underline">Book Search</h1>
            <form onSubmit={handleSearch} className="flex space-x-4 mb-8">
                <input
                    className="flex-grow border-2 border-blue-300 p-2 rounded-lg shadow-md text-black placeholder-gray-600"
                    type="text"
                    placeholder="Enter book title or author..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 shadow-md transition duration-200 ease-in-out transform hover:-translate-y-1">
                    Search
                </button>
            </form>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-8">
                {books.map((book) => (
                    <BookCard key={book.id} book={book} onClick={() => handleOpenModal(book)} />
                ))}
            </div>
            {selectedBook && <BookModal book={selectedBook} onClose={handleCloseModal} />}
        </div>
    );
};

export default Home;