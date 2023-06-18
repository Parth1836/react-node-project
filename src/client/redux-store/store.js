import { createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import userSlice, { userLogout } from "./redux-toolkit-code/slices/userSlice";
import taskSlice from "./redux-toolkit-code/slices/taskSlice";

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

const store = configureStore({
  reducer: {
    taskLists: taskSlice,
    userSession: userSlice,
  },
});

export default store;
