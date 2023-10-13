import { useState } from 'react'
import './BookForm.css'

const BookForm = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")

    const handleSubmitForm = (event) => {
        event.preventDefault()

        // dispatch actions
        if (title && author) {
            console.log(title, author);
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