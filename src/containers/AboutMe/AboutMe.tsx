import { PropsWithChildren } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Folders from "@/components/Folders/Folders";

const AboutMe = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Sidebar>
				<Folders />
			</Sidebar>
			{children}
		</>
	);
};

AboutMe.displayName = "AboutMe";
export default AboutMe;
