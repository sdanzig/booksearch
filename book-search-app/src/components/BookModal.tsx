import React, { useEffect, useRef, useState } from 'react';
import { Book } from '../types';

type Props = {
    book: Book;
    onClose: () => void;
};

const BookModal: React.FC<Props> = ({ book, onClose }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [imageUnavailable, setImageUnavailable] = useState(false);

    const handleImageError = (e: any) => {
        e.currentTarget.onerror = null;
        e.currentTarget.alt = 'Image Unavailable';
        setImageUnavailable(true);
    };

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        
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

    const modalClasses = isVisible
        ? "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out opacity-100"
        : "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out opacity-0 pointer-events-none";

    const contentClasses = isVisible
        ? "bg-white rounded-lg w-3/4 md:w-1/2 lg:w-1/3 p-8 shadow-2xl relative overflow-y-auto max-h-modal transition-all duration-300 ease-in-out transform scale-100 opacity-100"
        : "bg-white rounded-lg w-3/4 md:w-1/2 lg:w-1/3 p-8 shadow-2xl relative overflow-y-auto max-h-modal transition-all duration-300 ease-in-out transform scale-95 opacity-0";

        return (
            <div className={modalClasses}>
                <div ref={ref} className={contentClasses}>
                    <button onClick={onClose} className="absolute top-4 right-4 text-2xl font-bold text-blue-500">
                        &times;
                    </button>
                    <div className="rounded-lg w-full object-contain mb-4 bg-gray-200 p-4 flex items-center justify-center text-gray-600 relative">
                        <img
                            className="rounded-lg w-full object-contain"
                            src={book.imageUrl}
                            alt={book.title}
                            onError={handleImageError}
                        />
                        {imageUnavailable && <div className="absolute text-center">Image Unavailable</div>}
                    </div>
                    <h3 className="text-2xl text-blue-700 font-bold mb-2">{book.title}</h3>
                    <h4 className="text-blue-500 italic mb-3">{book.authors.join(', ')}</h4>
                    <p className="text-gray-800">{book.description}</p>
                </div>
            </div>
        );        
    };
    
    export default BookModal;
