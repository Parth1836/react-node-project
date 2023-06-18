import { ADD_TASK, DELETE_TASK } from "../../constants/redux-constants/tasks";

export const addTodo = (text) => {
  return {
    type: ADD_TASK,
    payload: {
      id: new Date().getTime(),
      text,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};
