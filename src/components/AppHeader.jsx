import React, { useState } from "react";
import { Button, SelectButton } from "./Button";
import style from "../styles/modules/app.module.scss";
import TodoModal from "./TodoModal";

const AppHeader = ({ setFilter }) => {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<div className={style.appHeader}>
			<Button variant="primary" type="button" onClick={() => setModalOpen(true)}>
				Add Task
			</Button>
			<SelectButton onChange={(e) => setFilter(e.target.value)}>
				<option value="all">All</option>
				<option value="complete">Complete</option>
				<option value="incomplete">Incomplete</option>
			</SelectButton>
			<TodoModal todo={null} type="add" modalOpen={modalOpen} setModalOpen={setModalOpen}></TodoModal>
		</div>
	);
};

export default AppHeader;
