import styles from "./Button.module.scss";
import { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...props }: IButton) => {
	return (
		<button {...props} className={styles.button}>
			<span className={styles.bg}></span>
			{children}
		</button>
	);
};

Button.displayName = "Button";
export default Button;
