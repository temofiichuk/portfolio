"use client";
import styles from "./Folders.module.scss";
import Link from "next/link";
import {
	RiArrowDownSLine,
	RiArrowRightSLine,
	RiFolder3Line,
	RiJavascriptLine,
} from "@remixicon/react";
import { useState } from "react";

export interface IFileNode {
	name: string;
	type: "folder" | "file";
	children?: IFileNode[];
	route?: string;
}

interface IFolders {
	structure: IFileNode[];
}

const extension = ".js";

const icons = {
	folder: <RiFolder3Line widths={20} />,
	file: <RiJavascriptLine widths={20} />,
};

const Folders = ({ structure }: IFolders) => {
	const [open, setOpen] = useState(true);

	return (
		<ul className={styles.folder}>
			{structure?.map((item) => {
				return (
					<li key={item.name}>
						{item.route ? (
							<Link className={styles.file} href={item.route}>
								<span className={styles.fileIcon}>{icons[item.type]}</span>
								{item.name}
								{item.type === "file" && extension}
							</Link>
						) : (
							<div className={styles.wrapper}>
								<button onClick={() => setOpen((prev) => !prev)}>
									{!open ? <RiArrowRightSLine /> : <RiArrowDownSLine />}
									<span className={styles.folderIcon}>{icons[item.type]}</span>
									<span>{item.name}</span>
								</button>
								{item.children && open && <Folders structure={item.children} />}
							</div>
						)}
					</li>
				);
			})}
		</ul>
	);
};

Folders.displayName = "Folders";
export default Folders;
