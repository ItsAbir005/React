import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <h2>Todo App</h2>
      <AddTodo tasks={tasks} setTasks={setTasks} />
      <TodoList tasks={tasks} />
    </div>
  );
}

function AddTodo({ tasks, setTasks }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

function TodoList({ tasks }) {
  return (
    <ul>
      {tasks.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  );
}

export default App;
