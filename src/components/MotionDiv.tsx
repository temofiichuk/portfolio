"use client";

import { motion, MotionProps } from "framer-motion";
import { HTMLAttributes } from "react";

type MotionDivProps = MotionProps & HTMLAttributes<HTMLDivElement>;

const MotionDiv = ({ children, ...props }: MotionDivProps) => {
	return <motion.div {...props}>{children}</motion.div>;
};

export default MotionDiv;
