import styles from "./Header.module.scss";
import { HTMLAttributes } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import Route from "@/components/Route/Route";
import Link from "next/link";
import dynamic from "next/dynamic";
import { PanelPosition } from "@/components/Panel/Panel";
import { RiMacbookLine } from "@remixicon/react";

const Panel = dynamic(() => import("@/components/Panel/Panel"));

interface IHeader extends HTMLAttributes<HTMLHeadingElement> {
	route: string;
}

const pages = [
	{ title: "home.tsx", href: "/", label: "Home page" },
	{ title: "about_me.tsx", href: "/about-me", label: "About Me Page" },
	{ title: "projects.tsx", href: "/projects", label: "Projects Page" },
];

const Header = (props: IHeader) => {
	return (
		<header {...props} className={`${props.className} ${styles.header}`}>
			<Panel position={PanelPosition.TOP}>
				<Link aria-label="toogle additional sidebar" title="Toogle additional sidebar" href={"/"}>
					<RiMacbookLine widths={20} className={"fill-icon-macbook"} />
				</Link>

				<p title={`It is my name`}>mykhailo_temofiichuk</p>

				{pages.map(({ title, href, label }) => (
					<Route aria-label={label} href={href} title={title} key={title} />
				))}

				<LanguageSwitcher />
			</Panel>
		</header>
	);
};

Header.displayName = "Header";
export default Header;
