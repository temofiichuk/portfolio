"use client";
import styles from "./Filter.module.scss";
import {
	RiCss3Line,
	RiHtml5Fill,
	RiJavascriptLine,
	RiReactjsLine,
	RiTailwindCssLine,
	RiWordpressLine,
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
		key: "js",
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
	{
		title: "WordPress",
		icon: <RiWordpressLine widths={20} />,
		key: "wp",
	},
	{
		title: "PHP",
		icon: (
			<svg
				width="24px"
				height="24px"
				viewBox="0 0 16.00 16.00"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path d="M7.19792 3.06C5.60434 3.06 4.3125 4.34978 4.3125 5.9408V12.3472C4.3125 13.5362 3.34711 14.5 2.15625 14.5C0.965386 14.5 0 13.5362 0 12.3472C0 11.9164 0.349778 11.5672 0.78125 11.5672C1.21272 11.5672 1.5625 11.9164 1.5625 12.3472C1.5625 12.6746 1.82833 12.94 2.15625 12.94C2.48417 12.94 2.75 12.6746 2.75 12.3472V5.9408C2.75 3.48821 4.7414 1.5 7.19792 1.5C9.22509 1.5 10.9355 2.85396 11.4715 4.70551C13.9858 4.78385 16 6.84348 16 9.3728C16 9.41167 15.9972 9.44987 15.9917 9.48721C15.9972 9.52454 16 9.56274 16 9.6016V13.72C16 14.1508 15.6502 14.5 15.2187 14.5H7.19792C6.76644 14.5 6.41667 14.1508 6.41667 13.72V9.6016C6.41667 9.17082 6.76644 8.8216 7.19792 8.8216C8.79149 8.8216 10.0833 7.53182 10.0833 5.9408C10.0833 4.34978 8.79149 3.06 7.19792 3.06ZM14.4458 9.48719C14.4403 9.44986 14.4375 9.41166 14.4375 9.3728C14.4375 7.75995 13.2076 6.43389 11.6332 6.27844C11.48 8.3122 9.95487 9.96383 7.97917 10.3133V12.94H10.4271V11.2032C10.4271 10.7724 10.7769 10.4232 11.2083 10.4232C11.6398 10.4232 11.9896 10.7724 11.9896 11.2032V12.94H14.4375V9.6016C14.4375 9.56274 14.4403 9.52453 14.4458 9.48719Z" />
			</svg>
		),
		key: "php",
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
					const isChecked = filters.includes(item.key);
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
								<svg
									className={`${styles.checkbox} ${isChecked ? styles.checked : ""}`}
									width="15"
									height="15"
									viewBox="0 0 110 110"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M31.9595 54.505C39.2138 64.997 43.9669 71.8316 47.0498 76.2329C50.6669 81.3969 54.3386 79.3636 58.1167 74.3162L92.0446 28.9885C99.4475 19.0981 92.39 5 80.0359 5H20C11.7157 5 5 11.7157 5 20V90C5 98.2843 11.7157 105 20 105H89.7973C98.0816 105 104.797 98.2843 104.797 90V20C104.797 11.7157 98.0816 5 89.7973 5H61.2838"
										// stroke="white"
										strokeWidth="10"
										strokeLinecap="round"
										pathLength={6}
										strokeDasharray={5}
									/>
								</svg>
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
