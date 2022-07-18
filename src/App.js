import "./styles.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
export default function App() {
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
    </div>
  );
}
