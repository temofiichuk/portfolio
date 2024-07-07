"use client";
import styles from "./CursorHoverDiv.module.scss";
import {
	HTMLAttributes,
	MouseEvent,
	PropsWithChildren,
	TouchEvent,
	useReducer,
	useRef,
	useState,
} from "react";

interface ICursorHover extends PropsWithChildren {}
const DELAY = 100;

enum ActionType {
	HIDE,
	HIDE_ANIMATION,
	SHOW,
}

interface Action {
	type: ActionType;
	payload?: number;
}

interface State {
	hideAnimation: boolean;
	show: boolean;
}

function reducer(state: State, action: ActionType) {
	// const { type, payload } = action;
	switch (action) {
		case ActionType.SHOW:
			return { ...state, show: true, hideAnimation: false };
		case ActionType.HIDE:
			return { ...state, show: false, hideAnimation: false };
		case ActionType.HIDE_ANIMATION:
			return { ...state, hideAnimation: true };
		default:
			return state;
	}
}

interface ICursorHover extends HTMLAttributes<HTMLDivElement> {}
const CursorHoverDiv = ({ children, ...props }: ICursorHover) => {
	const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
	// const [show, setShow] = useState(false);
	const [state, dispatch] = useReducer(reducer, { hideAnimation: false, show: false });

	const ref = useRef(null);

	const mouseMoveHandler = (e: MouseEvent<HTMLElement>) => {
		const key = setTimeout(() => {
			if (!state.show) dispatch(ActionType.SHOW);
			if (!ref.current) return;
			const target = ref.current as HTMLDivElement;
			const targetRect = target.getBoundingClientRect();

			setCoords({
				x: e.clientX - targetRect.left - 40,
				y: e.clientY - targetRect.top - 40,
			});
		}, DELAY);

		return () => clearTimeout(key);
	};

	const touchMoveHandler = (e: TouchEvent<HTMLElement>) => {
		const key = setTimeout(() => {
			if (!state.show) dispatch(ActionType.SHOW);
			if (!ref.current) return;
			const target = ref.current as HTMLDivElement;
			const targetRect = target.getBoundingClientRect();

			setCoords({
				x: e.targetTouches[0].clientX - targetRect.left - 40,
				y: e.targetTouches[0].clientY - targetRect.top - 80,
			});
		}, DELAY);

		return () => clearTimeout(key);
	};

	const endHandler = () => {
		dispatch(ActionType.HIDE_ANIMATION);
		const key = setTimeout(() => {
			dispatch(ActionType.HIDE);
		}, 800);
		return () => clearTimeout(key);
	};

	return (
		<div
			ref={ref}
			{...props}
			onMouseMove={mouseMoveHandler}
			onTouchEnd={endHandler}
			onMouseLeave={endHandler}
			onTouchMove={touchMoveHandler}>
			{state.show && (
				<div
					className={`${styles.cursor} ${state.hideAnimation && styles.hide}`}
					style={{ left: coords.x, top: coords.y }}
				/>
			)}

			{children}
		</div>
	);
};

CursorHoverDiv.displayName = "CursorHoverDiv";
export default CursorHoverDiv;
