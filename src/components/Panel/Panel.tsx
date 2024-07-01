import styles from "./Panel.module.scss";
import { Children, HTMLAttributes, PropsWithChildren } from "react";

export enum PanelPosition {
	TOP,
	BOTTOM,
	LEFT,
	RIGHT,
}

interface IPanel extends HTMLAttributes<HTMLDivElement> {}
interface IPanel extends PropsWithChildren {
	position?: PanelPosition;
}

const Panel = ({ children, position, ...props }: IPanel) => {
	return (
		<div {...props} className={`${props.className} ${styles.panel}`} data-position={position}>
			<ul>
				{Children.toArray(children).map((child, index) => (
					<li key={index}>{child}</li>
				))}
			</ul>
		</div>
	);
};

Panel.displayName = "Panel";
export default Panel;
