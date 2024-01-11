import { useRef } from "react";

interface IToDoList {
  handleClick: (text: string) => void;
}

const ToDoList = ({ handleClick }: IToDoList) => {
  const changeRef = useRef<HTMLInputElement | null>(null);
  const onClick = () => {
    if (changeRef.current) {
      handleClick(changeRef.current.value);
      changeRef.current.value = "";
    }
  };
  return (
    <div>
      <input type="text" ref={changeRef} />
      <button onClick={onClick}>Add ToDo</button>
    </div>
  );
};

export default ToDoList;
