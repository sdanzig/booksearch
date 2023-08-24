import React from 'react';

type Props = {
  book: Book;
  onClose: () => void;
};

const BookModal: React.FC<Props> = ({ book, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-3/4 md:w-1/2 lg:w-1/3 p-8 shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl font-bold text-blue-500">
          &times;
        </button>
        <img className="h-40 rounded-lg w-full object-cover mb-4" src={book.imageUrl} alt={book.title} />
        <h3 className="text-2xl text-blue-700 font-bold mb-2">{book.title}</h3>
        <h4 className="text-blue-500 italic mb-3">{book.authors.join(', ')}</h4>
        <p className="text-gray-800">{book.description}</p>
      </div>
    </div>
  );
};

export default BookModal;
