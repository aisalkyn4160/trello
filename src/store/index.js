import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import ListSlice from "./ListSlice";
import titleToDoSlice from "./titleTodoSlice";
import todoSlice from "./todoSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        list: ListSlice.reducer,
        ttlTodo: titleToDoSlice.reducer,
        todo: todoSlice.reducer
    }
})

export default store