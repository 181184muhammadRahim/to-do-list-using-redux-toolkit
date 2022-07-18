import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, editTask, clearEditToggle } from "./todoSlice";
let notAdd = false;
const TodoInput = () => {
  const editTextListener = useSelector((state) => state.todo.edittext);
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState("");
  useEffect(() => {
    if (editTextListener.value !== "") {
      setTaskText(editTextListener.value);
      notAdd = true;
    }
  }, [editTextListener]);
  const handleClick = () => {
    if (taskText === "") {
      alert("Field is empty");
    } else {
      if (notAdd) {
        dispatch(
          editTask({
            description: taskText,
            id: editTextListener.id
          })
        );
        dispatch(clearEditToggle());
        notAdd = false;
        setTaskText("");
      } else {
        dispatch(addTask(taskText));
        setTaskText("");
      }
    }
  };
  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      handleClick();
    }
  };
  return (
    <div>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick}>Add Task</button>
    </div>
  );
};

export default TodoInput;
