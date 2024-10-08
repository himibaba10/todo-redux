import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TTodo = {
  id?: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

const initialState = {
  todos: [] as TTodo[],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<TTodo>) => {
      const id = Math.random().toString(36).substring(2, 7);
      state.todos.push({ ...payload, id, isCompleted: false });
    },

    editTodo: (state, { payload }: PayloadAction<TTodo>) => {
      const todoIndex = state.todos.findIndex((todo) => todo.id === payload.id);
      const todo = state.todos[todoIndex];

      todo!.title = payload.title;
      todo!.description = payload.description;

      state.todos[todoIndex] = todo;
    },

    deleteTodo: (state, { payload }: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },

    toggleTodoComplete: (state, { payload }: PayloadAction<string>) => {
      const todoIndex = state.todos.findIndex((todo) => todo.id === payload);

      const todo = state.todos[todoIndex];
      todo!.isCompleted = !todo?.isCompleted;

      state.todos[todoIndex] = todo;
    },
  },
});

export const { addTodo, editTodo, deleteTodo, toggleTodoComplete } =
  todoSlice.actions;
export default todoSlice.reducer;
