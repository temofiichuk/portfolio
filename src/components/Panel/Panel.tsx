import styles from "./Panel.module.scss";
import { Children, HTMLAttributes, memo, PropsWithChildren } from "react";
import ClientPanel from "./Panel.client";

export enum PanelPosition {
	TOP = "top",
	BOTTOM = "bottom",
	LEFT = "left",
	RIGHT = "right",
}

interface IPanel extends HTMLAttributes<HTMLDivElement> {}
interface IPanel extends PropsWithChildren {
	position: PanelPosition;
}

const Panel = ({ children, position, ...props }: IPanel) => {
	return (
		<div {...props} className={`${props.className ?? ""} ${styles.panel}`} data-position={position}>
			<ClientPanel position={position}>
				{Children.toArray(children).map((child, index) => (
					<li key={index}>{child}</li>
				))}
			</ClientPanel>
		</div>
	);
};

Panel.displayName = "Panel";
export default memo(Panel);
