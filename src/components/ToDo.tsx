import ToDoItems from "./ToDoItems";
import { useAppDispatch } from "../store/redux-hooks";
import { removeTodo, toggleTodo } from "../store/slices/todoSlice";
import { Todo } from "../types";
import { selectAllTodos } from "../store/todoSelector";
import { useSelector } from "react-redux";

const ToDo = () => {
  const dispatch = useAppDispatch();
  const list = useSelector(selectAllTodos);
  const handleRemove = (id: Todo["id"]) => {
    dispatch(removeTodo(id));
  };

  const handleToggle = (id: Todo["id"]) => {
    dispatch(toggleTodo(id));
  };

  return (
    <ul>
      {list.map((todo) => (
        <ToDoItems
          key={todo.id}
          toggleTodo={handleToggle}
          removeTodo={handleRemove}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default ToDo;
