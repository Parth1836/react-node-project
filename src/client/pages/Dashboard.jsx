import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Axios from "axios";
import TaskList from "./redux-pages/TaskLists";
import Task from "./redux-pages/Tasks";
import { userLogout } from "../redux-store/redux-toolkit-code/slices/userSlice";

function Dashboard() {
  const dispatch = useDispatch();
  const userSession = useSelector((state) => state.userSession);
  console.log("userSession", userSession);

  const logout = () => {
    if (
      Object.keys(userSession?.userSession).length !== 0 &&
      window.confirm("Are you sure you want to log out?")
    ) {
      dispatch(userLogout());
    }
  };

  const loadMasterData = async () => {
    const data = await Axios.get("/api/user");
    console.log("data", data.data.data);
  };

  useEffect(() => {
    console.log("hi ");
    // loadMasterData();
    // createData({ id: 3, name: "julubar" });
  }, []);
  return (
    <div>
      <button
        style={{ float: "right", margin: "5px 5px" }}
        type="button"
        disabled={Object.keys(userSession?.userSession).length === 0}
        onClick={logout}
      >
        Logout
      </button>
      <Task />
      <TaskList />
    </div>
  );
}

export default Dashboard;
