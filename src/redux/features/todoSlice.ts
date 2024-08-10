import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TTodo = {
  id: string;
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
    deleteTodo: (state, { payload }: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
