import { MutableRefObject, useEffect, useState } from "react";

function useScrollDirection(element?: MutableRefObject<any>) {
	const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

	useEffect(() => {
		let lastScrollTop = 0;
		if (!element?.current) return;

		const handleScroll = () => {
			const section = element.current;
			const { scrollTop, scrollHeight, offsetHeight } = section;
			if (scrollTop === 0 || scrollTop + offsetHeight >= scrollHeight) {
				return;
			}
			setScrollDirection(scrollTop > lastScrollTop ? "down" : "up");
			lastScrollTop = Math.max(0, scrollTop);
		};

		element.current?.addEventListener("scroll", handleScroll);
		return () => element.current?.removeEventListener("scroll", handleScroll);
	}, []);

	return scrollDirection;
}

export default useScrollDirection;
