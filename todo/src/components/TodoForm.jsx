
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../fetuers/todoSlice'

function TodoForm() {
  const dispetch = useDispatch()
  const [input, setInput]= useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    dispetch(addTodo(input))
    
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
      placeholder='Add task'
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      />

      <button type='submit'
      
      >
        ADD
      </button>

    </form>
  )
}

export default TodoForm