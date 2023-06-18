import { ADD_TASK, DELETE_TASK } from "../../constants/redux-constants/tasks";

const initialState = {
  tasks: [],
};

// eslint-disable-next-line default-param-last
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export default taskReducer;
