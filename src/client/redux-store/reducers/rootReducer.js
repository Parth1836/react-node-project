import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  tasksList: taskReducer,
  userSession: userReducer,
});

export default rootReducer;
