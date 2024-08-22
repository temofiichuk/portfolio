import { MutableRefObject, useEffect, useState } from "react";

function useScrollDirection(element?: MutableRefObject<any>) {
	const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

	useEffect(() => {
		let lastScrollTop = 0;
		if (!element?.current) return;
		const section = element.current;

		const handleScroll = () => {
			const { scrollTop, scrollHeight, offsetHeight } = section;
			if (scrollTop === 0 || scrollTop + offsetHeight >= scrollHeight) {
				return;
			}
			setScrollDirection(scrollTop > lastScrollTop ? "down" : "up");
			lastScrollTop = Math.max(0, scrollTop);
		};

		section.addEventListener("scroll", handleScroll);
		return () => section.removeEventListener("scroll", handleScroll);
	}, []);

	return scrollDirection;
}

export default useScrollDirection;
