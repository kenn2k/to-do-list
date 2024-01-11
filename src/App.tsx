import { useState } from "react";
import "./App.css";
import ToDoList from "./ToDo-List";
import ToDo from "./ToDo";
import { Todo } from "./types";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (text: string) => {
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const checked = (id: Todo["id"]) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };
  const removeById = (id: Todo["id"]) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="content">
      <ToDoList handleClick={handleAdd} />
      <ToDo list={todos} removeTodo={removeById} toggleTodo={checked} />
    </div>
  );
}

export default App;
