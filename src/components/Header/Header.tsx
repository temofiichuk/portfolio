import styles from "./Header.module.scss";
import Link from "next/link";
import { HTMLAttributes } from "react";
import Button from "@/components/Button/Button";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import Route from "@/components/Route/Route";
import Panel, { PanelPosition } from "@/components/Panel/Panel";

interface IHeader extends HTMLAttributes<HTMLHeadingElement> {
	route: string;
}

const pages = [
	{ title: "home.tsx", href: "/" },
	{ title: "about_me.tsx", href: "/about-me" },
	{ title: "projects.tsx", href: "/projects" },
];

const Header = (props: IHeader) => {
	console.clear();
	return (
		<header {...props} className={`${props.className} ${styles.header}`}>
			<Panel position={PanelPosition.TOP}>
				<Link href={"/"}>
					<Button title={`link to the home.tsx`}> mykhailo_temofiichuk </Button>
				</Link>

				{pages.map(({ title, href }) => (
					<Route href={href} title={title} key={title} />
				))}

				<LanguageSwitcher />
			</Panel>
		</header>
	);
};

Header.displayName = "Header";
export default Header;
