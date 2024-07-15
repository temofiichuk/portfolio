import { PropsWithChildren } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Filter from "@/components/Filter/Filter";
import FilterProvider from "@/providers/FilterProvider";

const Layout = async ({ children }: PropsWithChildren) => {
	return (
		<FilterProvider>
			<Sidebar>
				<Filter />
			</Sidebar>
			<section>{children}</section>
		</FilterProvider>
	);
};

export default Layout;
