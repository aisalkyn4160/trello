import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
    todos: [],
    isShow: false
}
const titleToDoSlice = createSlice({
    name: 'ttlTodo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: Math.random(),
                text: action.payload
            }
            state.todos.push(todo)
            state.count = state.count +1
            state.isShow = true
        }

    }
}
)

export const {addTodo} = titleToDoSlice.actions
export default titleToDoSlice