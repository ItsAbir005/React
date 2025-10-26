import { use, useEffect,useState} from "react";
import { TodoProvider } from "./context";
import './App.css';
import Todofrom from "./components/Todofrom";
import Todoiteam from "./components/Todoiteam";
function App() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (todo) => {
    setTodos((prev)=>[{...todo,id:Date.now(),completed:false},...prev]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo))
    );
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    if (todos && todos.length) {
      setTodos(todos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleTodo }}>
      <div className="App">
        <h1>Todo App</h1>
        <Todofrom />
        <div>
          {todos.map((todo) => (
            <Todoiteam key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </TodoProvider>
  );
}
export default App;
