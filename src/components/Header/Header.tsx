import styles from "./Header.module.scss";
import { HTMLAttributes } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import Route from "@/components/Route/Route";
import Link from "next/link";
import dynamic from "next/dynamic";
import { PanelPosition } from "@/components/Panel/Panel";

const Panel = dynamic(() => import("@/components/Panel/Panel"));

interface IHeader extends HTMLAttributes<HTMLHeadingElement> {
	route: string;
}

const pages = [
	{ title: "home.tsx", href: "/" },
	{ title: "about_me.tsx", href: "/about-me" },
	{ title: "projects.tsx", href: "/projects" },
];

const Header = (props: IHeader) => {
	return (
		<header {...props} className={`${props.className} ${styles.header}`}>
			<Panel position={PanelPosition.TOP}>
				<Link title={`link to the home.tsx`} href={"/"}>
					mykhailo_temofiichuk
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
