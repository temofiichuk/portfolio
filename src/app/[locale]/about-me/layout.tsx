import { PropsWithChildren } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./about-me.module.scss";

const Layout = async ({ children }: PropsWithChildren) => {
	return (
		<div className={styles.wrapper}>
			<p className={styles.title}>about_me.tsx</p>
			<Sidebar />
			<section>{children}</section>
		</div>
	);
};

export default Layout;
