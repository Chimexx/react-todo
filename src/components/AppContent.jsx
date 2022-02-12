import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const AppContent = () => {
	const [...todoList] = useSelector((state) => state.todo.todoList);

	const sortedList = todoList?.sort((a, b) => new Date(b.time) - new Date(a.time));
	return (
		<div>
			{sortedList?.length > 0 ? (
				sortedList.map((todo) => <Todo key={todo.id} todo={todo} />)
			) : (
				<div>
					<h4>List is empty, please add some.</h4>
				</div>
			)}
		</div>
	);
};

export default AppContent;
