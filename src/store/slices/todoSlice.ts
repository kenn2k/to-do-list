import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../types";

const initialState: Todo[] = [];

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: new Date().toString(),
        title: action.payload,
        completed: false,
      };
      return [newTodo, ...state];
    },
    toggleTodo: (state, action: PayloadAction<Todo["id"]>) => {
      const toggle = state.find((el) => el.id === action.payload);
      if (toggle) {
        toggle.completed = !toggle.completed;
      }
    },
    removeTodo: (state, action: PayloadAction<Todo["id"]>) =>
      state.filter((todo) => todo.id !== action.payload),
  },
});

export const { addTodo, toggleTodo, removeTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
