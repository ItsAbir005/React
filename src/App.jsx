import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useState(["Learn React", "Practice useState"]);
  const [count, setCount] = useState(0); // Unrelated state

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase Counter: {count}
      </button>

      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} text={todo} />
        ))}
      </ul>
    </div>
  );
}
