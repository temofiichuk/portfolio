import { useEffect, useState } from "react";

// Debounce function to limit how often a function can fire
const debounce = (func: () => void, delay: number) => {
	let timeoutId: NodeJS.Timeout;
	return () => {
		if (timeoutId) clearTimeout(timeoutId);
		timeoutId = setTimeout(func, delay);
	};
};

// Define a custom hook named useIsMobile
const useIsMobile = (breakpoint: number = 768, debounceDelay: number = 300): boolean => {
	const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= breakpoint);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= breakpoint);
		};
		const debouncedResizeHandler = debounce(handleResize, debounceDelay);

		window.addEventListener("resize", debouncedResizeHandler);
		handleResize();

		return () => window.removeEventListener("resize", debouncedResizeHandler);
	}, [breakpoint, debounceDelay]);

	return isMobile;
};

export default useIsMobile;
