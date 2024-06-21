import {useDispatch,useSelector} from 'react-redux'

import React, { useState } from 'react'
import { deleteTodo,updateTodo,toggleTodo } from '../fetuers/todoSlice'

function TodoItem() {
    const dispatch = useDispatch()
    const todos = useSelector((state)=>state.todos)

   


  return (
    <div>
        <ul>

            {
                todos.map((todo)=>(
                    <li 
                    className='mx-8 mt-6 '
                    key={todo.id}>
                        <input type="checkbox" 
                        className="px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
                        checked={todo.completed} onChange={()=>dispatch(toggleTodo(todo.id))}/>
                        <span
                        className=''
                        >{todo.text}</span>
                        <button
                        className='px-2 py-1 ml-2 text-white bg-red-500 rounded'
                        onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>
                        <button 
                        className='px-2 py-1 ml-2 text-white bg-green-500 rounded'
                        onClick={()=>dispatch(updateTodo(todo.id,todo.text ))}>Update</button>
                    </li>
                ))
            }
            
        </ul>

    </div>
  )
}

export default TodoItem