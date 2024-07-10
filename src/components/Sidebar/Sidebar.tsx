import styles from "./Sidebar.module.scss";
import Folders, { IFileNode } from "@/components/Folders/Folders";

interface ISidebar {}

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

const Sidebar = (props: ISidebar) => {
	return (
		<div className={styles.sidebar}>
			<Folders structure={structure} />
		</div>
	);
};

Sidebar.displayName = "Sidebar";
export default Sidebar;
