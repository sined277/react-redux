import * as actionTypes from './actionTypes'

const innitialState = []

const bookReducer = (state = innitialState, action) => {
    switch (action.type) {

        case actionTypes.ADD_BOOK:
            return [...state, action.payload]

        case actionTypes.DELETE_BOOK:
            return state.filter((book) => {
                return book.id !== action.payload
            })       
            
        default:
            return state
    }
}

export default bookReducer