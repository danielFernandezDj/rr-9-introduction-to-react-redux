import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counterSlice'
import { addTodo, clearTodo, removeTodo } from './features/todoSlice'
import { getByText } from '@testing-library/react'
import { type } from '@testing-library/user-event/dist/type'

function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [input, setInput] = useState(0)

  const byAmount = (e) => {
    e.preventDefault()
    dispatch(incrementByAmount(Number(input)))
  }

  return (
    <div>
      <h1>{count}</h1>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}>
        Increment
      </button>
      <form onSubmit={(e) => byAmount(e)}>
        <input type="number" onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div >
  )
}

export default Counter