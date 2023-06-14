import "./index.css";
import { todos } from "./mocks/todos";

const TodoList = () => {
  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
