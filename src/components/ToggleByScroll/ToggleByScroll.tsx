"use client";

import React, { Children, cloneElement, ReactElement, useRef } from "react";
import useScrollDirection from "@/hooks/useScrollDirection";
import useIsMobile from "@/hooks/useIsMobile";
import styles from "@/components/ToggleByScroll/ToggleByScroll.module.scss";
import { motion } from "framer-motion";

interface ToggleByScrollProps {
	children: [ReactElement, ReactElement];
}

const variants = {
	visible: { opacity: 1, height: "initial" },
	initial: { opacity: 1 },
	hidden: { opacity: 0, height: 0 },
};

const ToggleByScroll = ({ children }: ToggleByScrollProps) => {
	const isMobile = useIsMobile(1023);
	const ref = useRef<HTMLElement>(null);
	const scrollDirection = useScrollDirection(ref);

	const sidebarMotionProps = {
		initial: isMobile ? "initial" : "visible",
		animate: isMobile ? (scrollDirection === "up" ? "visible" : "hidden") : "visible",
		variants,
		transition: { duration: 0.3 },
		className: styles.sidebar,
	};

	return (
		<>
			{Children.map(children, (child, index) => {
				if (index === 0) {
					return (
						<motion.div {...sidebarMotionProps}>
							<div className="p-5">{child}</div>
						</motion.div>
					);
				} else {
					return cloneElement(child, { ref });
				}
			})}
		</>
	);
};

ToggleByScroll.displayName = "ToggleByScroll";

export default ToggleByScroll;
