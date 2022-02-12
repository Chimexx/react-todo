import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
	todoList: localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : [],
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.todoList.push(action.payload);
			localStorage.setItem("todoList", JSON.stringify(state.todoList));
			toast.success("Task Added Successfully");
		},
		updateTodo: (state, action) => {
			const index = state.todoList.findIndex((item) => item.id === action.payload.id);
			console.log(action.payload);
			console.log(index);
			state.todoList[index] = action.payload;
			localStorage.setItem("todoList", JSON.stringify(state.todoList));
			toast.success("Task Updated Successfully");
		},
		deleteTodo: (state, action) => {
			state.todoList = state.todoList.filter((item) => item.id !== action.payload.id);
			localStorage.setItem("todoList", JSON.stringify(state.todoList));
			toast.success("Task Deleted Successfully");
		},
	},
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
