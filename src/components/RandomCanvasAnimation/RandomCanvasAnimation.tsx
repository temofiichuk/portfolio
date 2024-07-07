"use client";
import { HTMLAttributes, memo, useLayoutEffect, useRef } from "react";
import styles from "./RandomCanvasAnimation.module.scss";

type Shape = (ctx: CanvasRenderingContext2D, progress: number) => void;
type ShapePoints = { x: number; y: number }[];

interface IRandomCanvasAnimation extends HTMLAttributes<HTMLDivElement> {}

function getRandomNumber(min: number, max: number, fix: number) {
	const random = Math.random() * (max - min) + min;
	const rounded = Math.round(random * 1000) / 1000;
	return +rounded.toFixed(fix);
}

function getRandomColor() {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

const interpolateColor = (color1: string, color2: string, factor: number) => {
	const hex = (x: number) => x.toString(16).padStart(2, "0");
	const r1 = parseInt(color1.slice(1, 3), 16);
	const g1 = parseInt(color1.slice(3, 5), 16);
	const b1 = parseInt(color1.slice(5, 7), 16);
	const r2 = parseInt(color2.slice(1, 3), 16);
	const g2 = parseInt(color2.slice(3, 5), 16);
	const b2 = parseInt(color2.slice(5, 7), 16);
	const r = Math.round(r1 + factor * (r2 - r1));
	const g = Math.round(g1 + factor * (g2 - g1));
	const b = Math.round(b1 + factor * (b2 - b1));
	return `#${hex(r)}${hex(g)}${hex(b)}`;
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
	fix = 3,
}: RandomPoints): { x: number; y: number }[] => {
	let shape = [];
	for (let i = 0; i < corners; i++) {
		shape.push({ x: getRandomNumber(startX, endX, fix), y: getRandomNumber(startY, endY, fix) });
	}
	return shape;
};

const MIN_BOUNDARY = 100;

const RandomCanvasAnimation = (props: IRandomCanvasAnimation) => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useLayoutEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const width = canvas.width;
		const height = canvas.height;
		const corners = 3;
		const transitionDuration = 15000; // 15 seconds
		const blur = `${MIN_BOUNDARY}px`;

		const boundary = {
			startX: MIN_BOUNDARY,
			endX: width - MIN_BOUNDARY,
			startY: MIN_BOUNDARY,
			endY: height - MIN_BOUNDARY,
		};

		const startShape1Points = getRandomPoints({ corners, ...boundary });
		const startShape2Points = getRandomPoints({ corners, ...boundary });

		let currentColor1 = getRandomColor();
		let nextColor1 = getRandomColor();
		let currentPoints1 = startShape1Points;
		let nextPoints1 = getRandomPoints({ corners, ...boundary });

		let currentColor2 = getRandomColor();
		let nextColor2 = getRandomColor();
		let currentPoints2 = startShape2Points;
		let nextPoints2 = getRandomPoints({ corners, ...boundary });

		let startTime = performance.now();

		// Animation function
		const animate = (now: number) => {
			const elapsed = now - startTime;
			const interpolationFactor = Math.min(elapsed / transitionDuration, 1);

			ctx.clearRect(0, 0, width, height);
			ctx.save();
			// ctx.filter = `blur(${blur})`;
			ctx.beginPath();
			setPoints(ctx, currentPoints1, nextPoints1, interpolationFactor);
			ctx.closePath();
			ctx.fillStyle = interpolateColor(currentColor1, nextColor1, interpolationFactor);
			ctx.fill();
			ctx.beginPath();
			setPoints(ctx, currentPoints2, nextPoints2, interpolationFactor);
			ctx.closePath();
			ctx.fillStyle = interpolateColor(currentColor2, nextColor2, interpolationFactor);
			ctx.fill();
			ctx.restore();

			if (elapsed >= transitionDuration) {
				startTime = now;
				currentColor1 = nextColor1;
				currentPoints1 = nextPoints1;
				nextColor1 = getRandomColor();
				nextPoints1 = getRandomPoints({ corners, ...boundary });

				currentColor2 = nextColor2;
				currentPoints2 = nextPoints2;
				nextColor2 = getRandomColor();
				nextPoints2 = getRandomPoints({ corners, ...boundary });
			}

			requestAnimationFrame(animate);
		};

		// Start animation
		requestAnimationFrame(animate);
	}, []);

	return (
		<div {...props}>
			<canvas className={styles.anima} ref={canvasRef} width={870} height={824} />
		</div>
	);
};

export default memo(RandomCanvasAnimation);
