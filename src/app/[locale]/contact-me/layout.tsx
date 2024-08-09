import { PropsWithChildren } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";

const layout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Sidebar className={"hidden lg:block"}>Sidebar</Sidebar>
			{children}
		</>
	);
};

export default layout;
