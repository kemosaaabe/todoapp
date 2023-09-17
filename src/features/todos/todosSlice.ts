import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now(),
        title: action.payload,
        completed: false,
      };

      state.todos.push(newTodo);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    completeTodo: (state, action: PayloadAction<number>) => {
      const todoCompleted = state.todos.find(
        (todo) => todo.id === action.payload
      );

      if (todoCompleted) {
        todoCompleted.completed = !todoCompleted.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, completeTodo } = todosSlice.actions;

export default todosSlice.reducer;
