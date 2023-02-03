import Todo from "./todo";
import todoData from "../data/todoData";
import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState(todoData);
  const onComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const onDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="mx-auto max-w-sm">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onComplete={() => onComplete(todo.id)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
