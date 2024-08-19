import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";

interface SidebarProps extends HTMLAttributes<HTMLElement>, PropsWithChildren {}

const Sidebar = forwardRef<HTMLElement, SidebarProps>(({ children, ...props }, ref) => (
	<aside {...props} ref={ref}>
		{children}
	</aside>
));
Sidebar.displayName = "Sidebar";
export default Sidebar;
