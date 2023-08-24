type Props = {
    book: Book;
    onClick: () => void;
  };
  
  const BookCard: React.FC<Props> = ({ book, onClick }) => {
    return (
      <div onClick={onClick} className="border-2 border-blue-300 p-4 rounded-lg shadow hover:shadow-2xl transition-shadow duration-200 transform hover:scale-105 cursor-pointer">
        <img className="h-40 rounded-lg w-full object-cover mb-4 hover:opacity-90 transition-opacity duration-200" src={book.imageUrl} alt={book.title} />
        <h3 className="text-2xl text-blue-700 font-bold mb-2">{book.title}</h3>
        <h4 className="text-blue-500 italic mb-3">{book.authors.join(', ')}</h4>
        <p className="text-gray-800 line-clamp-3">{book.description}</p>
      </div>
    );
  };
  
  export default BookCard;
