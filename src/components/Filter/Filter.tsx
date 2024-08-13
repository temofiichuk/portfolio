"use client";
import styles from "./Filter.module.scss";
import {
	RiCss3Line,
	RiHtml5Fill,
	RiJavascriptLine,
	RiReactjsLine,
	RiTailwindCssLine,
} from "@remixicon/react";
import { HTMLAttributes, ReactNode } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { STACK } from "@/containers/Projects/Projects";

interface IFilterProps extends HTMLAttributes<HTMLElement> {}

export interface IFilter {
	title: string;
	icon: ReactNode;
	key: STACK;
}

const FILTERS: IFilter[] = [
	{
		title: "React",
		icon: <RiReactjsLine widths={20} />,
		key: "react",
	},
	{
		title: "JavaScript",
		icon: <RiJavascriptLine widths={20} />,
		key: "javascript",
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
	const searchParams = useSearchParams();
	const filtersParams = searchParams.get("filters");
	const filters = filtersParams ? filtersParams.split(",") : [];
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleFilter = (value: string) => {
		const params = new URLSearchParams(searchParams);

		if (filters?.includes(value)) {
			filters.splice(filters.indexOf(value), 1);
		} else {
			filters.push(value);
		}

		params.set("filters", filters.join(","));

		replace(`${pathname}?${params.toString()}`);
	};

	return (
		<div {...props}>
			<ul className={styles.filter}>
				{FILTERS.map((item) => {
					return (
						<li key={item.key}>
							<input
								checked={filters?.includes(item.key)}
								onChange={(e) => handleFilter(e.target.value)}
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
