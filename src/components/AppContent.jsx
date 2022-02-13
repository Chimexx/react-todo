import Todo from "./Todo";
import style from "../styles/modules/app.module.scss";
import { AnimatePresence, motion } from "framer-motion";

const container = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

export const child = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
};
const AppContent = ({ filteredList }) => {
	return (
		<motion.div
			className={style.content__wrapper}
			variants={container}
			initial="hidden"
			animate="visible"
		>
			<AnimatePresence>
				{filteredList?.length > 0 ? (
					filteredList.map((todo) => <Todo key={todo.id} todo={todo} />)
				) : (
					<div>
						<motion.h4 variants={child} className={style.emptyText}>
							Todo List is empty.
						</motion.h4>
					</div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export default AppContent;
