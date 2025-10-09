import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState(["Learn React", "Build a project"]);
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };
  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <div className="flex gap-2 justify-center mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task..."
          className="border px-3 py-2 rounded w-2/3"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      {tasks.length > 0 ? (
        <ul className="text-left">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="border-b py-2 flex items-center justify-between"
            >
              {task}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 italic">No tasks yet!</p>
      )}
    </div>
  );
}

export default App;
