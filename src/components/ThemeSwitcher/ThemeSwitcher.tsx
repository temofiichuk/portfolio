"use client";
import styles from "./ThemeSwitcher.module.scss";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { RiContrastDropFill } from "@remixicon/react";

interface IThemeSwitcher {}

const ThemeSwitcher = (props: IThemeSwitcher) => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return;

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
