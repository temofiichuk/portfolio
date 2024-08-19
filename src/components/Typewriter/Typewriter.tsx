"use client";
import {
	Children,
	createElement,
	isValidElement,
	memo,
	ReactNode,
	useEffect,
	useMemo,
	useState,
} from "react";

import styles from "./Typewriter.module.scss";

export interface ITypewriterProps {
	children: ReactNode;
	speed?: number;
	loop?: boolean;
	random?: number;
	delay?: number;
	cursor?: boolean;
	onFinished?: Function;
	onStart?: Function;
	cursorElement?: ReactNode | string;
}

const extractTextFromChildren = (children: ReactNode): string => {
	let text = "";
	const traverseChildren = (childArray: ReactNode) => {
		Children.forEach(childArray, (child) => {
			if (typeof child === "string") {
				text += child;
			} else if (isValidElement(child)) {
				traverseChildren(child.props.children);
			}
		});
	};
	traverseChildren(children);
	return text;
};

const Typewriter = ({
	children,
	speed = 100,
	loop,
	random = 200,
	delay,
	cursor = true,
	onFinished,
	onStart,
	cursorElement = "▎",
}: ITypewriterProps) => {
	const [currentTextIndex, setCurrentTextIndex] = useState(0);
	const [timeDelay, setTimeDelay] = useState(delay);
	const text = useMemo(() => extractTextFromChildren(children), [children]);
	const cursorElm = useMemo(
		() => <span className={styles.cursor}>{cursorElement}</span>,
		[cursorElement]
	);

	useEffect(() => {
		const timeoutKeys: NodeJS.Timeout[] = [];

		timeoutKeys.push(
			setTimeout(
				() => {
					if (timeDelay) {
						setTimeDelay(undefined);
					}
					if (currentTextIndex === 0) {
						onStart && onStart();
					}
					if (currentTextIndex < text.length) {
						setCurrentTextIndex((prevState) => prevState + 1);
					} else {
						if (loop) {
							timeoutKeys.push(
								setTimeout(
									() => {
										setCurrentTextIndex(0);
									},
									speed + Math.random() * random
								)
							);
						} else {
							onFinished && onFinished();
						}
					}
				},
				timeDelay ?? speed + Math.random() * random
			)
		);

		return () => {
			timeoutKeys.map((key) => clearTimeout(key));
		};
	}, [
		currentTextIndex,
		timeDelay,
		loop,
		onFinished,
		onStart,
		delay,
		cursor,
		random,
		speed,
		text.length,
	]);

	const renderChildrenWithTyping = (
		children: ReactNode,
		currentIndex: { value: number }
	): ReactNode => {
		return Children.map(children, (child) => {
			if (typeof child === "string") {
				const start = currentIndex.value;
				const end = start + child.length;
				currentIndex.value = end;
				if (currentTextIndex >= end) {
					return child;
				} else if (currentTextIndex >= start) {
					return (
						<>
							{child.substring(0, currentTextIndex - start)}
							{currentIndex.value >= currentTextIndex && !timeDelay && cursorElm}
						</>
					);
				} else {
					return null;
				}
			} else if (isValidElement(child)) {
				return createElement(
					child.type,
					{
						...child.props,
					},
					renderChildrenWithTyping(child.props.children, currentIndex)
				);
			}
			return null;
		});
	};
	// Do not pass children as props. Instead, pass them as additional arguments to React.createElement.
	return renderChildrenWithTyping(children, { value: 0 });
};

Typewriter.displayName = "Typewriter";
export default memo(Typewriter);
