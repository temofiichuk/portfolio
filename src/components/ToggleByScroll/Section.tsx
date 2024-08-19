import styles from "./ToggleByScroll.module.scss";
import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement>, PropsWithChildren {}

const Section = forwardRef<HTMLElement, SectionProps>(({ children, className, ...props }, ref) => (
	<section {...props} ref={ref} className={`${className ?? ""} ${styles.section}`}>
		{children}
	</section>
));

Section.displayName = "Section";

export default Section;
