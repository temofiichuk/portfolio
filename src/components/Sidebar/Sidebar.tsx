import { HTMLAttributes } from "react";

interface ISidebar extends HTMLAttributes<HTMLDivElement> {}

const Sidebar = ({ children, ...props }: ISidebar) => {
	return (
		<aside {...props} className={"p-5"}>
			{children}
		</aside>
	);
};

Sidebar.displayName = "Sidebar";
export default Sidebar;
