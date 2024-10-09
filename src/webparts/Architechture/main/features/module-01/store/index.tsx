import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../config/redux/store"

interface Customer {
    username:string,
    email:string,
    contact:number
    image:string
}
export interface ITodoSlice {
    todos: string[]
    customers: Customer[]
}
const initialState: ITodoSlice  = {
    todos: [],
    customers:[]

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
        },
        addCustomer : (state, action:PayloadAction<Customer>)=>{
            state.customers.push(action.payload)
        }
    }
        
})

export const { addTodo,deleteTodo,addCustomer } = todoSlice.actions
export const   todoSelector = (state: RootState) => state.todoReducer.todos;
export default todoSlice.reducer


