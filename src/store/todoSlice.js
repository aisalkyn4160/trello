import { createSlice } from '@reduxjs/toolkit';


const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        count: 0,
    
    },
    reducers: {
    
        addItem: (state, action) => {
            const item = {
                id: Math.random(),
                text: action.payload
            }

            state.todos.push(item)
            state.count = state.count + 1
       
        }
    }
})

export const { addItem} = todoSlice.actions
export default todoSlice
