import "./App.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import PageTitle from "./components/PageTitle";
import styles from "./styles/modules/app.module.scss";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";
import { Toaster } from "react-hot-toast";

function App() {
	const [...todoList] = useSelector((state) => state.todo.todoList);
	const [filter, setFilter] = useState("all");

	const sortedList = todoList?.sort((a, b) => new Date(b.time) - new Date(a.time));

	const myFilter = () => {
		if (filter === "all") {
			return sortedList;
		} else {
			return sortedList.filter((todo) => todo.status === filter);
		}
	};

	return (
		<div>
			<Toaster
				position="bottom-center"
				gutter={8}
				toastOptions={{
					duration: 3000,
					style: {
						background: "#fff",
						color: "#62d346",
						fontSize: "1.5rem",
					},
					error: {
						style: {
							color: "red",
							secondary: "black",
						},
					},
				}}
			/>
			<PageTitle>title page</PageTitle>
			<div className={styles.app__wrapper}>
				<AppHeader setFilter={setFilter} />
				<AppContent filteredList={myFilter()}></AppContent>
			</div>
		</div>
	);
}

export default App;
