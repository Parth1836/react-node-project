import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../../redux-store/redux-toolkit-code/slices/taskSlice";

const TaskList = () => {
  const tasksLists = useSelector((state) => state.taskLists);
  console.log("--7-tasks", tasksLists);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="tasklist">
      <div className="display-tasks">
        <h3> Your tasks: </h3>{" "}
        <ul className="tasks">
          {" "}
          {tasksLists?.tasks?.map((task) => (
            <li className="task" key={task.id}>
              {" "}
              {task.text}{" "}
              <button
                type="submit"
                className="delete-btn"
                onClick={() => handleDelete(task.id)}
              >
                delete{" "}
              </button>{" "}
            </li>
          ))}{" "}
        </ul>{" "}
      </div>{" "}
    </div>
  );
};

export default TaskList;
