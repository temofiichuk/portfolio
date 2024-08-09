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
		image: "https://via.placeholder.com/300x200.png?text=Project+Alpha",
		name: "Project Alpha",
		stack: ["react", "javascript", "css"],
		url: "https://projectalpha.example.com",
		info: "Project Alpha is a dynamic web application built using React, JavaScript, and CSS to provide a seamless user experience.",
	},
	{
		image: "https://via.placeholder.com/300x200.png?text=Project+Beta",
		name: "Project Beta",
		stack: ["next_js", "javascript", "scss"],
		url: "https://projectbeta.example.com",
		info: "Project Beta utilizes Next.js for server-side rendering, JavaScript for interactive elements, and SCSS for styling.",
	},
	{
		image: "https://via.placeholder.com/300x200.png?text=Project+Gamma",
		name: "Project Gamma",
		stack: ["html", "css", "javascript"],
		url: "https://projectgamma.example.com",
		info: "Project Gamma is a simple static website crafted with HTML, CSS, and JavaScript to showcase a portfolio.",
	},
	{
		image: "https://via.placeholder.com/300x200.png?text=Project+Delta",
		name: "Project Delta",
		stack: ["react", "next_js", "scss"],
		url: "https://projectdelta.example.com",
		info: "Project Delta combines the power of React and Next.js with SCSS for a highly performant and stylish application.",
	},
	{
		image: "https://via.placeholder.com/300x200.png?text=Project+Epsilon",
		name: "Project Epsilon",
		stack: ["mysql", "javascript", "css"],
		url: "https://projectepsilon.example.com",
		info: "Project Epsilon is a data-driven application using MySQL for the database, with JavaScript and CSS for the frontend.",
	},
	{
		image: "https://via.placeholder.com/300x200.png?text=Project+Zeta",
		name: "Project Zeta",
		stack: ["react", "scss"],
		url: "https://projectzeta.example.com",
		info: "Project Zeta is a modern web app built with React for UI components and SCSS for styling.",
	},
	{
		image: "https://via.placeholder.com/300x200.png?text=Project+Eta",
		name: "Project Eta",
		stack: ["next_js", "css"],
		url: "https://projecteta.example.com",
		info: "Project Eta leverages Next.js for static site generation and CSS for styling.",
	},
	{
		image: "https://via.placeholder.com/300x200.png?text=Project+Theta",
		name: "Project Theta",
		stack: ["javascript", "html", "css"],
		url: "https://projecttheta.example.com",
		info: "Project Theta is a versatile web application built with JavaScript, HTML, and CSS to deliver a rich user experience.",
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
