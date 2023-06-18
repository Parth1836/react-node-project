import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux-store/redux-toolkit-code/slices/taskSlice";

const Task = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  // const [task, setTask] = useState("ass");

  function addNewTask() {
    const task = inputRef.current.value.trim();
    if (task !== "") {
      dispatch(addTodo(task));
      inputRef.current.value = "";
    }
  }

  return (
    <div className="task-component">
      <div className="add-task">
        <input
          type="text"
          placeholder="Add task here..."
          ref={inputRef}
          className="taskInput"
        />
        <button type="submit" onClick={addNewTask}>
          {" "}
          Add task{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
};

export default Task;
