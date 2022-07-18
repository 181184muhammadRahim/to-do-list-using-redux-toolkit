import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  edittext: { value: "", id: undefined }
};

let ID = 0;
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push({
        id: ID++,
        description: action.payload,
        completed: false
      });
    },
    removeTask(state, action) {
      state.tasks = state.tasks.filter(
        (element) => action.payload !== element.id
      );
    },
    updateEditToggle(state, action) {
      state.edittext.value = "Edit your task here";
      state.edittext.id = action.payload;
    },
    clearEditToggle(state) {
      state.edittext = {
        value: "",
        id: undefined
      };
    },
    editTask(state, action) {
      let flag = false;
      for (let i = 0; i < state.tasks.length; i++) {
        if (state.tasks[i].id === action.payload.id) {
          state.tasks[i].description = action.payload.description;
          flag = true;
          break;
        }
      }
      if (!flag) {
        alert("Task not found to be edited");
      }
    },
    changeStatusOfTask(state, action) {
      for (let i = 0; i < state.tasks.length; i++) {
        if (state.tasks[i].id === action.payload) {
          state.tasks[i].completed = !state.tasks[i].completed;
          break;
        }
      }
    }
  }
});
export const {
  addTask,
  removeTask,
  editTask,
  changeStatusOfTask,
  updateEditToggle,
  clearEditToggle
} = todoSlice.actions;
export default todoSlice.reducer;
