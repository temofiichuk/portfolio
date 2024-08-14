"use client";
import styles from "./MobileSidebar.module.scss";
import { HTMLAttributes, memo, useState } from "react";
import Route from "@/components/Route/Route";
import { PAGES } from "@/components/Header/Header";
import Panel, { PanelPosition } from "@/components/Panel/Panel";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";

interface IMobileSidebar extends HTMLAttributes<HTMLElement> {}

const MobileSidebar = (props: IMobileSidebar) => {
	const [open, setOpen] = useState(false);

	return (
		<aside {...props}>
			<button
				aria-label={"open mobile sidebar"}
				className={`${styles.button} ${open ? styles.isClosed : ""}`}
				onClick={() => setOpen((prev) => !prev)}>
				<svg viewBox="0 0 32 32" width={20} height={20}>
					<path
						className={`${styles.line} ${styles.lineTopBottom}`}
						d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
					<path className={styles.line} d="M7 16 27 16"></path>
				</svg>
			</button>
			<nav className={styles.sidebar} data-active={open}>
				<ul className={styles.pages}>
					{PAGES.map(({ title, href, label }) => (
						<li key={title}>
							<Route
								className={styles.desktop}
								aria-label={label}
								href={href}
								key={title}
								title={`Link to ${title}`}
								onClick={() => setOpen(false)}>
								{title}
							</Route>
						</li>
					))}
				</ul>
				<Panel className={"mt-auto"} position={PanelPosition.BOTTOM}>
					<LanguageSwitcher />
					<ThemeSwitcher />
				</Panel>
			</nav>
		</aside>
	);
};

MobileSidebar.displayName = "MobileSidebar";
export default memo(MobileSidebar);
