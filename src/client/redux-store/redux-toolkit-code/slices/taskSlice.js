import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.tasks.push({ id: new Date().getTime(), text: action.payload });
    },
    deleteTodo: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = taskSlice.actions;

export default taskSlice.reducer;
