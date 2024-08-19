"use client";
import { motion } from "framer-motion";
import styles from "./LineCounter.module.scss";
import { HTMLAttributes, memo, useEffect, useRef, useState } from "react";

interface ILineCounter extends HTMLAttributes<HTMLElement> {}

const LineCounter = ({ children, ...props }: ILineCounter) => {
	const [lines, setLines] = useState(0);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!ref.current) return;
		const content = ref.current;
		const countLines = () => {
			const computedStyle = window.getComputedStyle(content);
			const { height, lineHeight } = computedStyle;
			setLines(Math.ceil(parseFloat(height) / parseFloat(lineHeight)));
		};

		countLines();

		window.addEventListener("resize", countLines);

		return () => window.removeEventListener("resize", countLines);
	}, [ref.current]);

	return (
		<div {...props}>
			<div className={styles.wrapper}>
				{!!lines && (
					<ul className={styles.lines}>
						{Array.from({ length: lines }).map((_, index) => (
							<motion.li
								key={index}
								initial={{ y: -100, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: index * 0.001 }}>
								{index + 1}
							</motion.li>
						))}
					</ul>
				)}
				<motion.div
					ref={ref}
					aria-label={"content"}
					className={styles.content}
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}>
					{children}
				</motion.div>
			</div>
		</div>
	);
};

LineCounter.displayName = "LineCounter";
export default memo(LineCounter);
