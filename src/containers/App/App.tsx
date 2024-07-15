import styles from "./App.module.scss";
import Header from "@/components/Header/Header";
import Title from "@/components/Title/Title";
import Footer from "@/components/Footer/Footer";
import { PropsWithChildren } from "react";
import { Locale } from "../../../i18n.config";

interface IApp extends PropsWithChildren {
	locale: Locale;
}

const App = ({ children, locale }: IApp) => {
	return (
		<div className={styles.appWrapper}>
			<Header />
			<div className={styles.pageWrapper}>
				<Title className={styles.title} />
				{children}
			</div>
			<Footer locale={locale} />
		</div>
	);
};

App.displayName = "App";
export default App;
