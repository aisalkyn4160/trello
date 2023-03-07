import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: 'some@gmail.com',
    pass: 123,
    isAuthenticated: false,
    // error: null
    
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    
    reducers: {
        login: (state,action) => { 
            state.email = action.payload
            state.pass = action.payload
            state.isAuthenticated = true   
        }
    }
})


export const authSliceActions = authSlice.actions
export default authSlice