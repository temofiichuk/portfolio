import { PropsWithChildren } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Folders, { IFileNode } from "@/components/Folders/Folders";

const contactStructure: IFileNode[] = [
	{
		name: "contacts",
		type: "folder",
		children: [
			{
				name: "email",
				type: "file",
				route: "mailto:exmple@mail.com",
			},
			{
				name: "phone",
				type: "file",
				route: "tel:+491704830570",
			},
		],
	},
];

const layout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Sidebar className={"hidden lg:block"}>
				<Folders structure={contactStructure} />
			</Sidebar>
			{children}
		</>
	);
};

export default layout;
