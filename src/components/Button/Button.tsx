import styles from "./Button.module.scss";
import { HTMLAttributes, PropsWithChildren } from "react";

interface IButton extends HTMLAttributes<HTMLButtonElement> {}
interface IButton extends PropsWithChildren {}

const Button = ({ children, ...props }: IButton) => {
	return (
		<button {...props} className={styles.button}>
			{children}
		</button>
	);
};

Button.displayName = "Button";
export default Button;
