import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import styles from "../styles/modules/todoItem.module.scss";
import { getClasses } from "../utils/getClasses";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../app/slices/todoSlice";
import TodoModal from "./TodoModal";
import CheckButton from "./CheckButton";
import { child } from "./AppContent";
import { motion } from "framer-motion";

const Todo = ({ todo }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [checked, setChecked] = useState(false);
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteTodo(todo));
	};
	const handleEdit = () => {
		setModalOpen(true);
	};
	useEffect(() => {
		if (todo.status === "complete") {
			setChecked(true);
		} else {
			setChecked(false);
		}
	}, [todo.status]);

	const handleCheck = () => {
		setChecked(!checked);
		console.log(checked);
		dispatch(updateTodo({ ...todo, status: checked ? "incomplete" : "complete" }));
	};
	return (
		<>
			<motion.div className={styles.item} variants={child}>
				<div className={styles.todoDetails}>
					<div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
						<CheckButton todo={todo} checked={checked} handleCheck={handleCheck} />
						<div className={styles.texts}>
							<p
								className={getClasses([
									styles.todoText,
									todo.status === "complete" && styles["todoText--completed"],
								])}
							>
								{todo.title}
							</p>
							{/* <p className={styles.time}>{format(new Date(todo.time), "yyyy do MMM - p")}</p> */}
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
			</motion.div>
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
