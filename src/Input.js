import React from "react";



export const Input = ({todo,setTodo,addTodo}) => {
  return (
    <div >
    <input
    className="input"
    type="text"
    name="todo"
    value={todo}
    placeholder="Create a new todo"
    onChange={(e) => {
      setTodo(e.target.value);
    }}
    />
        <button onClick={addTodo}>
          Add
        </button>
      </div>
  )
}



