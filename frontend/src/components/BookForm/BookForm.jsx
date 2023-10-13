import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addBook } from '../../redux/books/actionCreators'
import './BookForm.css'

const BookForm = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const dispatch = useDispatch()

    const handleSubmitForm = (event) => {
        event.preventDefault()

        // dispatch actions
        if (title && author) {

            const newBook = {
                title,
                author,
                id: uuidv4()
            }

            dispatch(addBook(newBook))

            setTitle('');
            setAuthor('');
        }
    }
    return (
        <div className="app-block book-form">
            <h2>Add a new Book</h2>
            <form onSubmit={handleSubmitForm}>
                <div>
                    <label htmlFor='title'>Title: </label>
                    <input type='text' id='title' value={title} onChange={(event) => setTitle(event.target.value)} />
                </div>
                <div>
                    <label htmlFor='author'>Author: </label>
                    <input type='text' id='author' value={author} onChange={(event) => setAuthor(event.target.value)} />
                </div>
                <button type='submit'>Add book</button>
            </form>
        </div>
    )
}

export default BookForm