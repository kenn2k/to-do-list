import { Todo } from "../types";

interface TodoItemProps extends Todo {
  toggleTodo: (id: Todo["id"]) => void;
  removeTodo: (id: Todo["id"]) => void;
}

const TodoItem = ({
  title,
  completed,
  toggleTodo,
  removeTodo,
  id,
}: TodoItemProps) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span>{title}</span>
      <span onClick={() => removeTodo(id)}>&times;</span>
    </li>
  );
};

export default TodoItem;
