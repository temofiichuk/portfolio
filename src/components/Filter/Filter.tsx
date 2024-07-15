"use client";
import styles from "./Filter.module.scss";
import {
	RiCss3Line,
	RiHtml5Fill,
	RiJavascriptLine,
	RiReactjsLine,
	RiTailwindCssLine,
} from "@remixicon/react";
import { ChangeEvent, HTMLAttributes, ReactNode, useCallback, useContext } from "react";
import { FilterContext } from "@/providers/FilterProvider";

interface IFilterProps extends HTMLAttributes<HTMLElement> {}

export interface IFilter {
	title: string;
	icon: ReactNode;
	key: string;
}

const FILTERS: IFilter[] = [
	{
		title: "React",
		icon: <RiReactjsLine widths={20} />,
		key: "react",
	},
	{
		title: "Vanilla JS",
		icon: <RiJavascriptLine widths={20} />,
		key: "vanilla-js",
	},
	{
		title: "HTML",
		icon: <RiHtml5Fill widths={20} />,
		key: "html",
	},
	{
		title: "CSS",
		icon: <RiCss3Line widths={20} />,
		key: "css",
	},
	{
		title: "Tailwind",
		icon: <RiTailwindCssLine widths={20} />,
		key: "tailwind",
	},
];

const Filter = (props: IFilterProps) => {
	const { filter, setFilter } = useContext(FilterContext);

	const changeHandler = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setFilter((prevState: any[]) =>
				prevState.includes(e.target.value)
					? prevState.filter((item) => item !== e.target.value)
					: [...prevState, e.target.value]
			);
		},
		[setFilter]
	);

	return (
		<div {...props}>
			<ul className={styles.filter}>
				{FILTERS.map((item) => {
					return (
						<li key={item.key}>
							<input
								checked={filter?.includes(item.key)}
								onChange={changeHandler}
								type="checkbox"
								id={`filter.${item.key}`}
								value={item.key}
							/>
							<label htmlFor={`filter.${item.key}`}>
								{item.icon} {item.title}
							</label>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

Filter.displayName = "Filter";
export default Filter;
