import React from "react";
import ReactDOM from "react-dom";
import "./styles/GlobalStyles.css";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
