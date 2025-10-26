//src/components/TodoForm.jsx
import React, { useState } from "react";
import { useTodoContext } from "../context";
const TodoForm = () => {
  const { addTodo } = useTodoContext();
  const [text, setText] = useState("");
    const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo({ text: text.trim() });
      setText("");
    }
    };
    return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
    </form>
  );
};

export default TodoForm;
