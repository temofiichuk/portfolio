import { PropsWithChildren } from "react";
import AboutMe from "@/containers/AboutMe/AboutMe";

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<AboutMe>
			<section>{children}</section>
		</AboutMe>
	);
};

export default Layout;
