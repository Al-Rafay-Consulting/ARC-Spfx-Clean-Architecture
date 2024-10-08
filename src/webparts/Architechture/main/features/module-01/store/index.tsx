import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../config/redux/store"


export interface ITodoSlice {
    todos: string[]
}
const initialState: ITodoSlice  = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string[]>) => {
            state.todos =  [...action.payload]
        },

        deleteTodo : (state, action:PayloadAction<number>) => {
            state.todos = state.todos.filter((_, index) => index !== action.payload)
        }}
})

export const { addTodo,deleteTodo } = todoSlice.actions
export const todoSelector = (state: RootState) => state.todoReducer.todos;
export default todoSlice.reducer


