import styles from "./Header.module.scss";
import { HTMLAttributes } from "react";
import Route from "@/components/Route/Route";
import Link from "next/link";
import Panel, { PanelPosition } from "@/components/Panel/Panel";
import { RiMacbookLine } from "@remixicon/react";
import MobileSidebar from "@/components/MobileSidebar/MobileSidebar";
import { Locale } from "../../../i18n.config";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";

interface IHeader extends HTMLAttributes<HTMLHeadingElement> {
	locale: Locale;
}

export const PAGES = [
	{ title: "home.tsx", href: "/", label: "Home page" },
	{ title: "about_me.tsx", href: "/about-me", label: "About Me Page" },
	{ title: "projects.tsx", href: "/projects", label: "Projects Page" },
];

const Header = ({ locale, ...props }: IHeader) => {
	return (
		<header {...props} className={`${props.className ?? ""} ${styles.header}`}>
			<Panel position={PanelPosition.TOP}>
				<Link
					className={styles.desktop}
					aria-label="toogle additional sidebar"
					title="Toogle additional sidebar"
					href={"/"}>
					<RiMacbookLine widths={20} className={"fill-icon-macbook"} />
				</Link>
				<p title={`It is my name`}>mykhailo_temofiichuk</p>

				{PAGES.map(({ title, href, label }) => (
					<Route
						className={styles.desktop}
						aria-label={label}
						href={href}
						key={title}
						title={`Link to ${title}`}>
						{title}
					</Route>
				))}
				<>
					<MobileSidebar locale={locale} className={styles.mobile} />
					<LanguageSwitcher className={styles.desktop} />
				</>
			</Panel>
		</header>
	);
};

Header.displayName = "Header";
export default Header;
