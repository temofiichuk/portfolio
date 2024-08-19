import { PropsWithChildren } from "react";
import AboutMe from "@/containers/AboutMe/AboutMe";

const Layout = ({ children }: PropsWithChildren) => {
	return <AboutMe>{children}</AboutMe>;
};

export default Layout;
