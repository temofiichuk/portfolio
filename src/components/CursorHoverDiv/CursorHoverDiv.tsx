"use client";
import styles from "./CursorHoverDiv.module.scss";
import {
	HTMLAttributes,
	memo,
	MouseEvent,
	PropsWithChildren,
	TouchEvent,
	useCallback,
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
			return { ...state, hideAnimation: true, show: true };
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
	const timeoutRef = useRef<NodeJS.Timeout>();

	const setPoints = useCallback(
		(clientX: number, clientY: number, top: number = 0) => {
			if (!state.show) dispatch(ActionType.SHOW);
			if (!ref.current) return;
			const target = ref.current as HTMLDivElement;
			const targetRect = target.getBoundingClientRect();

			timeoutRef.current = setTimeout(() => {
				const updateCoords = () => {
					setCoords({
						x: clientX - targetRect.left - 40,
						y: clientY - targetRect.top - 40 - top,
					});
				};

				requestAnimationFrame(updateCoords);
			}, DELAY);
		},
		[state.show]
	);

	const mouseMoveHandler = useCallback(
		({ clientX, clientY }: MouseEvent<HTMLElement>) => setPoints(clientX, clientY),
		[setPoints]
	);

	const touchMoveHandler = useCallback(
		(e: TouchEvent<HTMLElement>) => {
			const { clientX, clientY } = e.targetTouches[0];
			setPoints(clientX, clientY, 40);
		},
		[setPoints]
	);

	const endHandler = useCallback(() => {
		dispatch(ActionType.HIDE_ANIMATION);
		clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => dispatch(ActionType.HIDE), 800);
	}, []);

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
					className={`${styles.cursor} ${state.hideAnimation ? styles.hide : ""}`}
					style={{ left: coords.x, top: coords.y }}
				/>
			)}

			{children}
		</div>
	);
};

CursorHoverDiv.displayName = "CursorHoverDiv";
export default memo(CursorHoverDiv);
