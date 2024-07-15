"use client";
import styles from "./RandomCanvasAnimation.module.scss";
import { HTMLAttributes, useEffect, useRef } from "react";

type ShapePoints = { x: number; y: number }[];

type Shape = {
	currentColor: string;
	nextColor: string;
	currentPoints: ShapePoints;
	nextPoints: ShapePoints;
};

interface IRandomCanvasAnimation extends HTMLAttributes<HTMLDivElement> {}

const getRandomNumber = (min: number, max: number) =>
	Math.round((Math.random() * (max - min) + min) * 1000) / 1000;

const getRandomColor = () =>
	`#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, "0")}`;

const interpolateColor = (c1: string, c2: string, f: number) => {
	const c = (c: string) => parseInt(c.slice(1), 16);
	const [r, g, b] = [c(c1) >> 16, (c(c1) >> 8) & 0xff, c(c1) & 0xff];
	const [r2, g2, b2] = [c(c2) >> 16, (c(c2) >> 8) & 0xff, c(c2) & 0xff];
	const hex = (n: number) => n.toString(16).padStart(2, "0");
	return `#${hex(Math.round(r + f * (r2 - r)))}${hex(Math.round(g + f * (g2 - g)))}${hex(Math.round(b + f * (b2 - b)))}`;
};

const setPoints = (
	ctx: CanvasRenderingContext2D,
	currentPoints: ShapePoints,
	nextPoints: ShapePoints,
	interpolationFactor: number
) => {
	for (let i = 0; i < currentPoints.length; i++) {
		const startPoint = currentPoints[i];
		const endPoint = nextPoints[i];
		const x = startPoint.x + (endPoint.x - startPoint.x) * interpolationFactor;
		const y = startPoint.y + (endPoint.y - startPoint.y) * interpolationFactor;
		if (i === 0) {
			ctx.moveTo(x, y);
		} else {
			ctx.lineTo(x, y);
		}
	}
};

type RandomPoints = {
	corners: number;
	startX: number;
	endX: number;
	startY: number;
	endY: number;
	fix?: number;
};

const getRandomPoints = ({
	corners,
	startX,
	startY,
	endX,
	endY,
}: RandomPoints): { x: number; y: number }[] => {
	let shape = [];
	for (let i = 0; i < corners; i++) {
		shape.push({ x: getRandomNumber(startX, endX), y: getRandomNumber(startY, endY) });
	}
	return shape;
};

const MIN_BOUNDARY = 100;

const RandomCanvasAnimation = (props: IRandomCanvasAnimation) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const { width, height } = canvas;
		const corners = 3;
		const duration = 30000; // 30 seconds
		const shapesNumber = 2;
		let startTime = performance.now();

		const boundary = {
			startX: MIN_BOUNDARY,
			endX: width - MIN_BOUNDARY,
			startY: MIN_BOUNDARY,
			endY: height - MIN_BOUNDARY,
		};

		const shapes: Shape[] = [];

		for (let i = 0; i < shapesNumber; i++) {
			shapes.push({
				currentColor: getRandomColor(),
				nextColor: getRandomColor(),
				currentPoints: getRandomPoints({ corners, ...boundary }),
				nextPoints: getRandomPoints({ corners, ...boundary }),
			});
		}

		// Animation function
		const animate = (now: number) => {
			const elapsed = now - startTime;
			const interpolationFactor = Math.min(elapsed / duration, 1);

			ctx.clearRect(0, 0, width, height);

			for (let i = 0; i < shapesNumber; i++) {
				const { currentColor, nextColor, currentPoints, nextPoints } = shapes[i];
				ctx.beginPath();
				setPoints(ctx, currentPoints, nextPoints, interpolationFactor);
				ctx.closePath();
				ctx.fillStyle = interpolateColor(currentColor, nextColor, interpolationFactor);
				ctx.fill();
			}

			ctx.save();

			if (elapsed >= duration) {
				startTime = now;

				for (let i = 0; i < shapesNumber; i++) {
					const { nextColor, nextPoints } = shapes[i];
					shapes[i] = {
						currentColor: nextColor,
						nextColor: getRandomColor(),
						currentPoints: nextPoints,
						nextPoints: getRandomPoints({ corners, ...boundary }),
					};
				}
			}

			requestAnimationFrame(animate);
		};

		// Start animation
		requestAnimationFrame(animate);
	}, []);

	return (
		<div {...props}>
			<canvas className={styles.canvas} ref={canvasRef} width={870} height={824} />
		</div>
	);
};

export default RandomCanvasAnimation;
