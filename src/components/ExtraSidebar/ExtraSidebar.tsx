import styles from "./ExtraSidebar.module.scss";
import { HTMLAttributes } from "react";

interface IExtraSidebar extends HTMLAttributes<HTMLElement> {}

const ExtraSidebar = (props: IExtraSidebar) => {
	return <aside {...props} className={`${props.className} ${styles.sidebar}`}></aside>;
};

ExtraSidebar.displayName = "ExtraSidebar";
export default ExtraSidebar;
