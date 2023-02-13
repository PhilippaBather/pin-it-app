import { createSlice } from "@reduxjs/toolkit";
import { getDateOneWeek } from "../../utils/utils";

// set initial deadline
const initialDeadline = getDateOneWeek();

const todoTaskInitialState = {
  todoTasks: [],
  title: "",
  priority: 0,
  deadline: initialDeadline,
  description: "",
};

const todoTasksSlice = createSlice({
  name: "todoTasks",
  initialState: todoTaskInitialState,
  reducers: {
    // insert methods here

    addTaskToTodos(state, action) {
      const newTask = action.payload;
      state.todoTasks.push({
        id: newTask.id,
        title: newTask.title,
        priority: newTask.priority,
        deadline:
          newTask.deadline !== null ? newTask.deadline : initialDeadline,
        description: newTask.description,
      });
    },

    // editTask methods

    // deleteTask method
  },
});

export const todoTaskActions = todoTasksSlice.actions;

export default todoTasksSlice;
