import {configureStore} from '@reduxjs/toolkit'
import bookReducer from './books/reducer';

const store = configureStore({
    reducer : {
        bookReducer: bookReducer,
    },
})

export default store;