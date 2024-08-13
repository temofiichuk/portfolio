import styles from "./PersonalBio.module.scss";
import LineCounter from "@/components/LineCounter/LineCounter";
import initTranslations from "@/i18n";
import { IPage } from "@/app/[locale]/page";

const i18nNamespaces = ["about-me"];

async function PersonalBio({ params: { locale } }: IPage) {
	const { t } = await initTranslations(locale, i18nNamespaces);

	return (
		<LineCounter className={styles.page}>
			<p> {`// personal-info/bio`} </p>
			<br />
			{t("bio")}
		</LineCounter>
	);
}

export default PersonalBio;
