import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addBook } from '../../redux/books/actionCreators'
import './BookForm.css'
import booksData from '../../data/books.json'

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

    const addRandomBook = () => {
        const randomBookIndex = Math.floor(Math.random() * booksData.length)
        const randomBook = booksData[randomBookIndex]
        const randomBookWithId = {
            ...randomBook,
            id: uuidv4()
        }
        dispatch(addBook(randomBookWithId))
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
                <button type='button' onClick={addRandomBook}>Add Random Book</button>
            </form>
        </div>
    )
}

export default BookForm