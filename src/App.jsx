import { use, useEffect,useState} from "react";
import './App.css';
import { Provider, useSelector, useDispatch } from "react-redux";
import { store, addTodo, removeTodo } from "./store";
function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };
  return (<div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a todo"
      />
      <button onClick={handleAdd}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}
