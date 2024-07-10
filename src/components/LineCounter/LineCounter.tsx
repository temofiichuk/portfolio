"use client";
import styles from "./LineCounter.module.scss";
import { HTMLAttributes, useEffect, useRef, useState } from "react";

interface ILineCounter extends HTMLAttributes<HTMLElement> {}

const LineCounter = ({ children, ...props }: ILineCounter) => {
	const [lines, setLines] = useState(0);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!ref.current) return;
		const content = ref.current;
		const countLines = () => {
			if (!ref.current) return;
			const computedStyle = window.getComputedStyle(content);
			const { height, lineHeight } = computedStyle;
			setLines(Math.ceil(parseInt(height) / parseInt(lineHeight)));
		};
		countLines();

		window.addEventListener("resize", countLines);

		return () => window.removeEventListener("resize", countLines);
	}, [ref.current]);

	return (
		<div {...props}>
			<div className={styles.wrapper}>
				{lines > 0 && (
					<ul className={styles.lines}>
						{Array.from({ length: lines }).map((_, index) => (
							<li key={index}>{index + 1}</li>
						))}
					</ul>
				)}
				<div ref={ref} aria-label={"content"} className={styles.content}>
					{children}
				</div>
			</div>
		</div>
	);
};

LineCounter.displayName = "LineCounter";
export default LineCounter;
