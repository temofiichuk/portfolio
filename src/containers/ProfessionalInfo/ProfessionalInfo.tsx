import initTranslations from "@/i18n";
import { IPage } from "@/app/[locale]/page";
import styles from "@/containers/PersonalBio/PersonalBio.module.scss";
import LineCounter from "@/components/LineCounter/LineCounter";

const i18nNamespaces = ["about-me"];
const ProfessionalInfo = async ({ params: { locale } }: IPage) => {
	const { t } = await initTranslations(locale, i18nNamespaces);

	return (
		<LineCounter className={styles.page}>
			<p> {`//professional-info/bio`} </p>
			<br />
			<p className={"whitespace-pre-wrap"}>{t("prof_profile")}</p>
		</LineCounter>
	);
};

ProfessionalInfo.displayName = "ProfessionalInfo";
export default ProfessionalInfo;
