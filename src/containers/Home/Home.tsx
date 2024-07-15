import styles from "./Home.module.scss";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import { Locale } from "../../../i18n.config";
import dynamic from "next/dynamic";

const RandomCanvasAnimation = dynamic(
	() => import("@/components/RandomCanvasAnimation/RandomCanvasAnimation")
);

interface IHome {
	locale: Locale;
}

const Home = ({ locale }: IHome) => {
	return (
		<>
			<HomeBanner locale={locale} className={styles.banner} />
			<RandomCanvasAnimation className={styles.anima} />
		</>
	);
};

Home.displayName = "Home";
export default Home;
