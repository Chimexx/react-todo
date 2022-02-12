import "./App.css";
import PageTitle from "./components/PageTitle";
import styles from "./styles/modules/app.module.scss";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";
import { Toaster } from "react-hot-toast";

function App() {
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
				<AppHeader />
				<AppContent></AppContent>
			</div>
		</div>
	);
}

export default App;
