import { createSlice } from '@reduxjs/toolkit';

const ListSlice = createSlice({
    name: 'list',
    initialState: {
        initState: [],
        count: 0,
        isAddedList: false
    },
    reducers: {
        add: (state, action) => {
           const listObj = {
                id: Math.random(),
                value: action.payload
           }
           state.initState.push(listObj)
           state.count +=1
           state.isAddedList = true
        }
    }
})

export const ListSliceActions = ListSlice.actions
export default ListSlice