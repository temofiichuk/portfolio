import styles from "./Home.module.scss";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import { Locale } from "../../../i18n.config";

interface IHome {
	locale: Locale;
}

const Home = ({ locale }: IHome) => {
	return <HomeBanner locale={locale} className={styles.banner} />;
};

Home.displayName = "Home";
export default Home;
