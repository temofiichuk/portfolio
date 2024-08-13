"use client";
import styles from "./Projects.module.scss";
import { useSearchParams } from "next/navigation";
import Project, { ProjectType } from "@/components/Project/Project";

export type STACK =
	| "html"
	| "react"
	| "javascript"
	| "css"
	| "scss"
	| "next_js"
	| "mysql"
	| "tailwind";

const data: ProjectType[] = [
	{
		image: "/example-projects/agregat-example/preview.png",
		name: "Agragat",
		stack: ["html", "javascript", "css"],
		url: "/example-projects/agregat-example/index.html",
		info: "Project Agregat is a just example web application built using Html, JavaScript and CSS to show html and css experience.",
	},
	{
		image: "/example-projects/users_list_app/preview.png",
		name: "Users List",
		stack: ["html", "javascript", "css"],
		url: "/example-projects/users_list_app/index.html",
		info: "A Users List app is a tool for managing and displaying a list of users with attributes. Features typically include adding, editing, deleting and search users, responsive design, and data validation. The app is useful for managing employee directories, event attendees, or membership lists.",
	},
	{
		image: "/example-projects/food_app/preview.png",
		name: "Food App",
		stack: ["html", "javascript", "css"],
		url: "/example-projects/food_app/index.html",
		info: "The Food App allows users to browse food items, manage their cart, and place orders. It features a search bar, product categories, and options for selecting order types (Dine In, To Go, Delivery) and payment methods. Users can view and edit cart items, enter personal and delivery information, and add items to their cart with customizable options.",
	},
	{
		image: "/example-projects/hamburger_app/preview.png",
		name: "Hamburger App",
		stack: ["html", "javascript", "css"],
		url: "/example-projects/hamburger_app/index.html",
		info: "The Hamburger Creator App is a web-based tool that allows users to customize and build their own hamburgers. Users can select different ingredients and see a visual representation of their burger as they make their choices. The app is designed for easy customization and interactive food creation.",
	},
	{
		image: "/example-projects/star_wars_app/preview.png",
		name: "Star Wars App",
		stack: ["html", "javascript", "css"],
		url: "/example-projects/star_wars_app/index.html",
		info: "The Star Wars App is a web application that allows users to explore data from the Star Wars universe. By connecting to the Star Wars API, users can access information about characters, planets, starships, and more. The app provides an interactive way to discover and learn about various aspects of the Star Wars galaxy.",
	},
];

interface IProjects {}

const Projects = (props: IProjects) => {
	const searchParams = useSearchParams();
	const filtersParams = searchParams.get("filters");
	const filters = filtersParams && filtersParams !== "" ? filtersParams.split(",") : [];

	return (
		<section className={styles.projects}>
			<ul>
				{data.map((project) => {
					const isFilter = filters.length >= 1;
					const hasStack = project.stack?.some((stack: STACK) => filters?.includes(stack));
					if (isFilter && !hasStack) return;

					return (
						<li key={project.name}>
							<Project detail={project} />
						</li>
					);
				})}
			</ul>
		</section>
	);
};

Projects.displayName = "Projects";
export default Projects;
