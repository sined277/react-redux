import { useSelector, useDispatch } from 'react-redux'
import './BookList.css'
import { deleteBook } from '../../redux/books/actionCreators';


const BookList = () => {
    const booksList = useSelector((state) => state.bookReducer);
    const dispatch = useDispatch()

    const onClickDelete = (id) => {
        dispatch(deleteBook(id))
    }

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
                            <div className='book-actions'>
                                <button onClick={() => onClickDelete(book.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BookList