"use client";
import styles from "./MobileSidebar.module.scss";
import { RiMenu3Fill } from "@remixicon/react";
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
				className={styles.button}
				onClick={() => setOpen((prev) => !prev)}>
				<RiMenu3Fill widths={20} />
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
