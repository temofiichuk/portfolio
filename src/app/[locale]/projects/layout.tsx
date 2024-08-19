import { PropsWithChildren } from "react";
import Filter from "@/components/Filter/Filter";
import ToggleByScroll from "@/components/ToggleByScroll/ToggleByScroll";
import Sidebar from "@/components/ToggleByScroll/Sidebar";
import Section from "@/components/ToggleByScroll/Section";

const Layout = async ({ children }: PropsWithChildren) => {
	return (
		<>
			<ToggleByScroll>
				<Sidebar>
					<Filter />
				</Sidebar>
				<Section>{children}</Section>
			</ToggleByScroll>
		</>
	);
};

export default Layout;
