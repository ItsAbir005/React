//src/components/TodoItem.jsx
import React from "react";
import { useTodoContext } from "../context";
const TodoItem = ({ todo }) => {
  const { updateTodo, editTodo, deleteTodo, toggleTodo } = useTodoContext();
    return (
    <li>
      <span
        style={{
            textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => toggleTodo(todo.id)}>
        {todo.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={() => editTodo(todo.id)}>Edit</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
