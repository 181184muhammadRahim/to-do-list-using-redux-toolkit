import { useDispatch, useSelector } from "react-redux";
import { changeStatusOfTask, updateEditToggle, removeTask } from "./todoSlice";
const TodoList = () => {
  const taskList = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();
  function togglecolor(value) {
    if (value) {
      return {
        display: "flex",
        textDecoration: "line-through",
        marginBottom: "10px"
      };
    } else {
      return {
        display: "flex",
        marginBottom: "10px"
      };
    }
  }
  function changeDoneButtonValue(value) {
    if (value) {
      return "Undone";
    } else {
      return "Done";
    }
  }
  return (
    <ol>
      {taskList.map((element) => (
        <div style={togglecolor(element.completed)} key={element.id}>
          <li style={{ textAlign: "start", marginRight: "10px" }}>
            {element.description}
          </li>
          <button
            onClick={() => {
              dispatch(changeStatusOfTask(element.id));
            }}
          >
            {changeDoneButtonValue(element.completed)}
          </button>
          <button
            onClick={() => {
              dispatch(updateEditToggle(element.id));
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              dispatch(removeTask(element.id));
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </ol>
  );
};
export default TodoList;
