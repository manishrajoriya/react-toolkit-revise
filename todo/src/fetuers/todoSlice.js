import {createSlice, nanoid} from '@reduxjs/toolkit';




const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos:[{
        id:1,
        text:'Add todo',
        completed:false
    }]
},
    reducers:{
        addTodo:(state, action )=>{
            const todo = {
                id: nanoid(),
                text: action.payload,
                 completed: false
            }
            state.todos.push(todo)
        },

        deleteTodo:(state, action )=> {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        toggleTodo:(state, action)=>{
            const todo = state.todos.find((todo) => todo.id === action.payload)
            todo.completed = !todo.completed
        },
        updateTodo:(state, action)=>{
            const todo = state.todos.find((todo) => todo.id === action.payload.id)
            todo.text = "hii"
        }
    }
})

export const {addTodo, deleteTodo, toggleTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer