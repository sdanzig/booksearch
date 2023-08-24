import React, { useEffect, useRef } from 'react';

type Props = {
    book: Book;
    onClose: () => void;
};

const BookModal: React.FC<Props> = ({ book, onClose }) => {
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-all duration-300 ease-in-out opacity-100">
            <div ref={ref} className="bg-white rounded-lg w-3/4 md:w-1/2 lg:w-1/3 p-8 shadow-2xl relative overflow-y-auto max-h-modal transition-transform duration-300 transform scale-100">
                <button onClick={onClose} className="absolute top-4 right-4 text-2xl font-bold text-blue-500">
                    &times;
                </button>
                <img className="rounded-lg w-full object-contain mb-4" src={book.imageUrl} alt={book.title} />
                <h3 className="text-2xl text-blue-700 font-bold mb-2">{book.title}</h3>
                <h4 className="text-blue-500 italic mb-3">{book.authors.join(', ')}</h4>
                <p className="text-gray-800">{book.description}</p>
            </div>
        </div>
    );
};

export default BookModal;
