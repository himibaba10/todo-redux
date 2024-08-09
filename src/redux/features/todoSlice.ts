import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TTodo = {
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
      state.todos.push({ ...payload, isCompleted: false });
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
