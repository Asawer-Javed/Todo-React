import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const Todo = () => {
  let [todos, setTodos] = useState([{ task: "Studying", id: uuidv4() }]);

  let [newTodo, setNewTodo] = useState("");

  const AddTodo = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { task: newTodo, id: uuidv4(), isDone: false },
    ]);
    setNewTodo("");
  };

  const DeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const MarkAllAsDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, isDone: true }))
    );
  };

  const MarkAsDoneTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: true } : todo
      )
    );
  };

  let UpdateTodo = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <>
      <h1>Schedule your life</h1>

      <input
        value={newTodo}
        onChange={UpdateTodo}
        placeholder="Enter your todo"
      ></input>
      <br></br>

      <button onClick={AddTodo}>Submit</button>

      <hr></hr>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.isDone ? "line-through" : "none",
            }}
          >
            {todo.task}
            <button onClick={() => DeleteTodo(todo.id)}>Delete</button>
            <button onClick={() => MarkAsDoneTodo(todo.id)}>MarkAsDone</button>
          </li>
        ))}
      </ul>
      {todos.length > 0 && (
        <button onClick={MarkAllAsDone}>Mark All as Done</button>
      )}
    </>
  );
};

export default Todo;
