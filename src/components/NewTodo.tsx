import { useAppDispatch } from "../store/redux-hooks";
import { addTodo } from "../store/slices/todoSlice";
import AddNewItem from "./NewItems";

const NewTodo = () => {
  const dispatch = useAppDispatch();
  const handleNewTodo = (title: string) => {
    dispatch(addTodo(title));
  };

  return <AddNewItem handleClick={handleNewTodo} />;
};

export default NewTodo;
