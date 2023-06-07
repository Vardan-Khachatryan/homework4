
import React from 'react'

export const Todolist = ({todos,deleteTodo}) => {
  return (
    <div>
      {todos?.length > 0 ? (
  <ul>
    {todos.map((todo, index) => (
      <div>
        <li key={index}> {todo} </li>

        <button
          onClick={() => {
            deleteTodo(todo);
          }}
        >
          Delete
        </button>
      </div>
    ))}
  </ul>
) : (
  <div>
    <p>No task found</p>
  </div>
)}
    </div>
  )
}






