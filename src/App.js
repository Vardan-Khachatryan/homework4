import { useState, useEffect } from "react";
import { Input } from "./Input";
import "./App.css";
import { Todolist } from "./Todolist";

const App = () => {
  const [todos, setTodos] =useState(JSON.parse(localStorage.getItem("todos")) ?? [])
  const [todo, setTodo] = useState('');
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <h1>React Todo App</h1>
      <Input todo={todo} setTodo={setTodo} addTodo={addTodo}/>
      <Todolist  todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
};

export default App;