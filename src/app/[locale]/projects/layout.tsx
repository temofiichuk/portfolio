import { PropsWithChildren } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Filter from "@/components/Filter/Filter";

const Layout = async ({ children }: PropsWithChildren) => {
	return (
		<>
			<Sidebar>
				<Filter />
			</Sidebar>
			{children}
		</>
	);
};

export default Layout;
