import { useState } from 'react';

type Props = {
    book: Book;
    onClick: () => void;
};

const BookCard: React.FC<Props> = ({ book, onClick }) => {
    const [imageUnavailable, setImageUnavailable] = useState(false);

    const handleImageError = () => {
        setImageUnavailable(true);
    };

    return (
        <div onClick={onClick} className="border-2 border-blue-300 p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300 transform hover:scale-110 cursor-pointer hover:bg-blue-100">
            <div className="h-40 rounded-lg w-full object-cover mb-4 hover:opacity-90 transition-opacity duration-200 bg-transparent p-4 flex items-center justify-center text-gray-600 relative">
                {imageUnavailable ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                        Image Unavailable
                    </div>
                ) : (
                    <img
                        className="h-40 rounded-lg w-full object-cover"
                        src={book.imageUrl}
                        alt={book.title}
                        onError={handleImageError}
                    />
                )}
            </div>
            <h3 className="text-2xl text-blue-700 font-bold mb-2">{book.title}</h3>
            <h4 className="text-blue-500 italic mb-3">{book.authors.join(', ')}</h4>
            <p className="text-gray-800 line-clamp-3">{book.description}</p>
        </div>
    );
};

export default BookCard;
