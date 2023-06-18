import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import userReducer from "./userReducer";
import taskSlice from "../redux-toolkit-code/slices/taskSlice";
import userSlice from "../redux-toolkit-code/slices/userSlice";

const rootReducer = combineReducers({
  tasksList: taskReducer,
  userSession: userReducer,
});

export default rootReducer;
