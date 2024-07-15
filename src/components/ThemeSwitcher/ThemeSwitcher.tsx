"use client";
import styles from "./ThemeSwitcher.module.scss";
import { useTheme } from "next-themes";
import { RiContrastDropFill } from "@remixicon/react";

const ThemeSwitcher = () => {
	const { setTheme, resolvedTheme } = useTheme();

	return (
		<button
			className={styles.themeSwitcher}
			onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
			<RiContrastDropFill widths={20} />
		</button>
	);
};

ThemeSwitcher.displayName = "ThemeSwitcher";
export default ThemeSwitcher;
