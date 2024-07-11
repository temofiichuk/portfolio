import { PropsWithChildren } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";

const Layout = async ({ children }: PropsWithChildren) => {
	return (
		<>
			<Sidebar>filter</Sidebar>
			<section>{children}</section>
		</>
	);
};

export default Layout;
