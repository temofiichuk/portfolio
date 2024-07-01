"use client";
import styles from "./CursorHoverDiv.module.scss";
import { HTMLAttributes, MouseEvent, PropsWithChildren, useEffect, useRef, useState } from "react";

interface ICursorHover extends PropsWithChildren {}

interface ICursorHover extends HTMLAttributes<HTMLDivElement> {}
const CursorHoverDiv = ({ children, ...props }: ICursorHover) => {
	const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
	const [show, setShow] = useState(false);

	const ref = useRef(null);
	const mouseMoveHandler = (e: MouseEvent<HTMLParagraphElement>) => {
		const key = setTimeout(() => {
			if (!show) setShow(true);
			requestAnimationFrame(() => {
				if (!ref.current) return;
				const target = ref.current as HTMLDivElement;
				setCoords({
					x: e.clientX - target.getBoundingClientRect().left - 40,
					y: e.clientY - target.getBoundingClientRect().top - 40,
				});
			});
		}, 200);

		return () => clearTimeout(key);
	};

	useEffect(() => {
		!coords && console.log(coords);
	}, [coords]);

	return (
		<div ref={ref} {...props} onMouseMove={mouseMoveHandler} onMouseLeave={() => setShow(false)}>
			<span
				className={`${styles.cursor} ${show ? styles.show : styles.hide}`}
				style={{ left: coords.x, top: coords.y }}
			/>

			{children}
		</div>
	);
};

CursorHoverDiv.displayName = "CursorHoverDiv";
export default CursorHoverDiv;
