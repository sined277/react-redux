import { useSelector } from 'react-redux'
import './BookList.css'

const BookList = () => {
    const booksList = useSelector((state) => state.bookReducer);

    return (
        <div className="app-block book-list">
            <h2>BookList</h2>

            {booksList.length === 0 ? (
                <h1>No Books Available</h1>
            ) : (
                <ul>
                    {booksList.map((book, index) => (
                        <li key={book.id}>
                            <div className='book-info'>
                                {++index} {book.title} by <strong>{book.author}</strong>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BookList