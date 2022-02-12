import { format } from "date-fns";
import React, { useState } from "react";
import styles from "../styles/modules/todoItem.module.scss";
import { getClasses } from "../utils/getClasses";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../app/slices/todoSlice";
import TodoModal from "./TodoModal";

const Todo = ({ todo }) => {
	const [modalOpen, setModalOpen] = useState(false);

	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteTodo(todo));
	};
	const handleEdit = () => {
		setModalOpen(true);
		// dispatch(deleteTodo());
	};
	return (
		<>
			<div className={styles.item}>
				<div className={styles.todoDetails}>
					<div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
						[]
						<div className={styles.texts}>
							<p
								className={getClasses([
									styles.todoText,
									todo.status === "complete" && styles["todoText--completed"],
								])}
							>
								{todo.title}
							</p>
							<p className={styles.time}>{format(new Date(todo.time), "yyyy do MMM - p")}</p>
						</div>
					</div>
					<div className={styles.todoActions}>
						<div className={styles.icon} onClick={handleEdit}>
							<MdEdit />
						</div>
						<div className={styles.icon} onClick={handleDelete}>
							<MdDelete />
						</div>
					</div>
				</div>
			</div>
			<TodoModal
				todo={todo}
				type="update"
				modalOpen={modalOpen}
				setModalOpen={setModalOpen}
			></TodoModal>
		</>
	);
};

export default Todo;
