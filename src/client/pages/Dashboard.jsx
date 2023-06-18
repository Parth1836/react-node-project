import TaskList from "./redux-pages/TaskLists";
import Task from "./redux-pages/Tasks";

function Dashboard() {
  return (
    <div>
      <Task />
      <TaskList />
    </div>
  );
}

export default Dashboard;
