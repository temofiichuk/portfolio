"use client";
import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { PanelPosition } from "@/components/Panel/Panel";

const variants = {
	top: { y: -100, opacity: 0 },
	bottom: { y: 100, opacity: 0 },
	left: { x: -100, opacity: 0 },
	right: { x: 100, opacity: 0 },
	show: { y: 0, x: 0, opacity: 1 },
};

interface IPanel extends PropsWithChildren {
	position: PanelPosition;
}

const Panel = ({ children, position }: IPanel) => {
	return (
		<motion.ul variants={variants} initial={position} animate={"show"}>
			{children}
		</motion.ul>
	);
};

export default Panel;
