import { PropsWithChildren } from "react";
import Folders from "@/components/Folders/Folders";
import ToggleByScroll from "@/components/ToggleByScroll/ToggleByScroll";
import Section from "@/components/ToggleByScroll/Section";
import Sidebar from "@/components/ToggleByScroll/Sidebar";

const AboutMe = ({ children }: PropsWithChildren) => {
	return (
		<>
			<ToggleByScroll>
				<Sidebar>
					<Folders />
				</Sidebar>
				<Section>{children}</Section>
			</ToggleByScroll>
		</>
	);
};

AboutMe.displayName = "AboutMe";
export default AboutMe;
