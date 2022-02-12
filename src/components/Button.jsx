import React from "react";
import style from "../styles/modules/button.module.scss";
import { getClasses } from "../utils/getClasses";

const buttonTypes = {
	primary: "primary",
	secondary: "secondary",
};

export const Button = ({ children, type = "button", variant, ...rest }) => {
	return (
		<button
			type={type}
			className={getClasses([style.button, style[`button--${buttonTypes[variant]}`]])}
			{...rest}
		>
			{children}
		</button>
	);
};

export const SelectButton = ({ children, ...rest }) => {
	return (
		<select {...rest} className={getClasses([style.button, style.button__select])}>
			{children}
		</select>
	);
};
