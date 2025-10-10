import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState(["Learn React", "Build a project"]);
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); 
  };
  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4"> Day 4 - Todo App</h1>

      {/* Input Field */}
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
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* Conditional Rendering */}
      {tasks.length > 0 ? (
        <ul className="text-left">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="border-b py-2 flex items-center justify-between"
            >
              {task}
              <button
                onClick={() => deleteTask(index)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
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
