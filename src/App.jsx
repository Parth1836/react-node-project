import "./App.css";
import { useDispatch } from "react-redux";
import MainRoutes from "./routes";
import { setUserSession } from "./client/redux-store/redux-toolkit-code/slices/userSlice";

function App() {
  const dispatch = useDispatch();
  const userDetails = {
    userId: 1,
    userName: "Parth Vaishnani",
    userEmail: "parth.vaishnani@gmail.com",
    userRole: "Developer",
  };
  dispatch(setUserSession(userDetails));
  return (
    <div className="App">
      <MainRoutes />
    </div>
  );
}
export default App;
