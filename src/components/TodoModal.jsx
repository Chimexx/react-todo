import React, { useState } from "react";
import style from "../styles/modules/modal.module.scss";
import { MdOutlineClose } from "react-icons/md";
import { Button } from "./Button";
import { addTodo, updateTodo } from "../app/slices/todoSlice";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";

const TodoModal = ({ type, modalOpen, setModalOpen, todo = {} }) => {
	const [title, setTitle] = useState(todo ? todo.title : "");
	const [status, setStatus] = useState(todo ? todo.status : "incomplete");
	const dispatch = useDispatch();

	const handleAddTask = (e) => {
		e.preventDefault();
		if (type === "add") {
			if (title) {
				setModalOpen(false);
				dispatch(addTodo({ id: uuid(), title, status, time: new Date().toLocaleString() }));
				setTitle("");
				setStatus("incomplete");
			} else {
				toast.error("Title cannot be empty!");
			}
		}
		if (type === "update") {
			if (title) {
				setModalOpen(false);
				dispatch(updateTodo({ id: todo.id, title, status, time: todo.time }));
			} else {
				toast.error("Title cannot be empty!");
			}
		}
	};
	return (
		<>
			{modalOpen && (
				<div className={style.wrapper}>
					<div className={style.container}>
						<div
							className={style.closeButton}
							onClick={() => setModalOpen(false)}
							onKeyDown={() => setModalOpen(false)}
							tabIndex={0}
							role="button"
						>
							<MdOutlineClose />
						</div>
						<form className={style.form} onSubmit={handleAddTask}>
							<h1 className={style.formTitle}> {type === "update" ? "Update" : "Add"} Task</h1>
							<label htmlFor="title" id="title">
								Title
								<input
									type="text"
									name="title"
									id="title"
									value={title}
									onChange={(e) => setTitle(e.target.value)}
								/>
							</label>
							<label htmlFor="status" id="status">
								Status
								<select
									name="status"
									id="status"
									value={status}
									onChange={(e) => setStatus(e.target.value)}
								>
									<option value="complete">Complete</option>
									<option value="incomplete">Incomplete</option>
								</select>
							</label>
							<div className={style.buttonContainer}>
								<Button variant="primary" type="submit">
									{type === "update" ? "Update" : "Add"} Task
								</Button>
								<Button
									variant="secondary"
									type="button"
									onClick={() => setModalOpen(false)}
									onKeyDown={() => setModalOpen(false)}
								>
									Cancel
								</Button>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	);
};

export default TodoModal;
