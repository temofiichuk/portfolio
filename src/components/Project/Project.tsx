import styles from "./Project.module.scss";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { STACK } from "@/containers/Projects/Projects";

export type ProjectType = {
	image: string;
	name: string;
	stack?: STACK[];
	url: string;
	info: string;
};

interface IProject extends HTMLAttributes<HTMLElement> {
	detail: ProjectType;
}

const Project = ({ detail: { image, name, url, info, stack }, ...props }: IProject) => {
	return (
		<article {...props} className={styles.project}>
			<div className={styles.imageBox}>
				<Image alt={name} src={image} width={400} height={200} />
			</div>
			<div className={styles.wrapper}>
				<p className={styles.info}>{info}</p>
				<Link href={url} className={styles.button}>
					View More
				</Link>
			</div>
		</article>
	);
};

Project.displayName = "Project";
export default Project;
