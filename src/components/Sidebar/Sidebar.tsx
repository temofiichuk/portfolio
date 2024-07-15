import styles from "./Sidebar.module.scss";
import { HTMLAttributes } from "react";

interface ISidebar extends HTMLAttributes<HTMLElement> {}

const Sidebar = ({ children, ...props }: ISidebar) => {
	return (
		<div {...props} className={`${props.className} ${styles.sidebar}`}>
			{children}
		</div>
	);
};

Sidebar.displayName = "Sidebar";
export default Sidebar;
