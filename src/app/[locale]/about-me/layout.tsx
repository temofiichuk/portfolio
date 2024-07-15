import { PropsWithChildren } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Folders, { IFileNode } from "@/components/Folders/Folders";

const structure: IFileNode[] = [
	{
		name: "personal_info",
		type: "folder",
		children: [
			{
				name: "education",
				type: "folder",
				children: [
					{
						name: "university",
						type: "file",
						route: "/about-me/personal-info/education/university",
					},
				],
			},
			{
				name: "bio",
				type: "file",
				route: "/about-me/personal-info/bio",
			},
		],
	},
	{
		name: "professional_info",
		type: "file",
		route: "/about-me/professional-info",
	},
	{
		name: "contacts",
		type: "file",
		route: "/about-me/contacts",
	},
];

const Layout = async ({ children }: PropsWithChildren) => {
	return (
		<>
			<Sidebar>
				<Folders structure={structure} />
			</Sidebar>
			<section>{children}</section>
		</>
	);
};

export default Layout;
