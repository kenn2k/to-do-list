import ToDoItems from "./ToDoItems";
import { Todo } from "./types";

interface ToDoListProps {
  list: Todo[];
  toggleTodo: (id: Todo["id"]) => void;
  removeTodo: (id: Todo["id"]) => void;
}

const ToDo = ({ list, toggleTodo, removeTodo }: ToDoListProps) => {
  return (
    <ul>
      {list.map((todo, index) => (
        <ToDoItems
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          key={index}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default ToDo;
