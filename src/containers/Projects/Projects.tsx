"use client";
import styles from "./Projects.module.scss";
import { useSearchParams } from "next/navigation";
import Project, { ProjectType } from "@/components/Project/Project";
import { motion } from "framer-motion";

export type STACK =
	| "html"
	| "react"
	| "js"
	| "css"
	| "scss"
	| "next_js"
	| "mysql"
	| "tailwind"
	| "php"
	| "wp";

const data: ProjectType[] = [
	{
		image: "/example-projects/agregat-example/preview.png",
		name: "Agragat",
		stack: ["html", "js", "css"],
		url: "/example-projects/agregat-example/index.html",
		info: "Project Agregat is a just example web application built using Html, JavaScript and CSS to show html and css experience.",
	},
	{
		image: "/example-projects/users_list_app/preview.png",
		name: "Users List",
		stack: ["html", "js", "css"],
		url: "/example-projects/users_list_app/index.html",
		info: "A Users List app is a tool for managing and displaying a list of users with attributes. Features typically include adding, editing, deleting and search users, responsive design, and data validation. The app is useful for managing employee directories, event attendees, or membership lists.",
	},
	{
		image: "/example-projects/food_app/preview.png",
		name: "Food App",
		stack: ["html", "js", "css"],
		url: "/example-projects/food_app/index.html",
		info: "The Food App allows users to browse food items, manage their cart, and place orders. It features a search bar, product categories, and options for selecting order types (Dine In, To Go, Delivery) and payment methods. Users can view and edit cart items, enter personal and delivery information, and add items to their cart with customizable options.",
	},
	{
		image: "/example-projects/hamburger_app/preview.png",
		name: "Hamburger App",
		stack: ["html", "js", "css"],
		url: "/example-projects/hamburger_app/index.html",
		info: "The Hamburger Creator App is a web-based tool that allows users to customize and build their own hamburgers. Users can select different ingredients and see a visual representation of their burger as they make their choices. The app is designed for easy customization and interactive food creation.",
	},
	{
		image: "/example-projects/star_wars_app/preview.png",
		name: "Star Wars App",
		stack: ["html", "js", "css"],
		url: "/example-projects/star_wars_app/index.html",
		info: "The Star Wars App is a web application that allows users to explore data from the Star Wars universe. By connecting to the Star Wars API, users can access information about characters, planets, starships, and more. The app provides an interactive way to discover and learn about various aspects of the Star Wars galaxy.",
	},
	{
		image: "/example-projects/flowers_for_school/preview.png",
		name: "Flowers4School",
		stack: ["html", "js", "css", "wp", "php"],
		url: "https://flowers4school.com/en/",
		info: 'The "Flowers4School" website is a charity project supporting Ukrainian schools by funding tulip plantings. Users can donate to help plant tulip bulbs at schools. The site allows users to select specific schools or regions to support and track the progress of the campaign, which aims to plant 100 million tulips across Ukraine.',
	},
];
const getRandomInt = (wrappedNumber: number) =>
	Math.floor(Math.random() * (wrappedNumber - wrappedNumber * -1 + 1)) + wrappedNumber * -1;

interface IProjects {}

const Projects = (props: IProjects) => {
	const searchParams = useSearchParams();
	const filtersParams = searchParams.get("filters");
	const filters = filtersParams && filtersParams !== "" ? filtersParams.split(",") : [];

	return (
		<div className={styles.projects}>
			<ul>
				{data.map((project, index) => {
					const isFilter = !!filters.length;
					const hasStack = project.stack?.some((stack: STACK) => filters?.includes(stack));
					if (isFilter && !hasStack) return;

					return (
						<motion.li
							transition={{ delay: index * 0.1 }}
							initial={{ x: getRandomInt(100), y: getRandomInt(100), opacity: 0 }}
							animate={{ x: 0, y: 0, opacity: 1 }}
							key={project.name}>
							<Project detail={project} />
						</motion.li>
					);
				})}
			</ul>
		</div>
	);
};

Projects.displayName = "Projects";
export default Projects;
