import { IPage } from "@/app/[locale]/page";
import initTranslations from "@/i18n";
import styles from "@/containers/PersonalBio/PersonalBio.module.scss";
import LineCounter from "@/components/LineCounter/LineCounter";
import { TFunction } from "i18next";
import Link from "next/link";

const i18nNamespaces = ["about-me"];

const education = (t: TFunction) => [
	{
		title: "Frontend Pro",
		place: "Hillel IT School",
		study_time: "2023",
		url: "https://www.education.certificate.certificate.certificate",
	},
	{
		title: "Web Development",
		place: "IT Academy RedMonKey",
		study_time: "2022-2023",
		url: "https://www.education.certificate.certificate.certificate",
	},
	{
		title: t("master_in_low"),
		place: t("uni_low_odessa"),
		study_time: "2018-2020",
		url: "https://www.education.certificate.certificate.certificate",
	},
	{
		title: t("bachelor_in_low"),
		place: t("uni_low_odessa"),
		study_time: "2015-2017",
		// url: "https://www.education.certificate.certificate.certificate",
	},
	{
		title: `${t("junior_specialist")}, ${t("including")} ${t("secondary_school_certificate")} (2014)`,
		place: t("college_uni_low_odessa"),
		study_time: "2012-2015",
		url: "https://www.education.certificate.certificate.certificate",
	},
	{
		title: t("primary_school_certificate"),
		place: t("primary_school"),
		study_time: "2003-2012",
		// url: "https://www.education.certificate.certificate",
	},
];

const Education = async ({ params: { locale } }: IPage) => {
	const { t } = await initTranslations(locale, i18nNamespaces);
	const structure = education(t);
	return (
		<LineCounter className={styles.page}>
			<p> {`//education`} </p>
			<br />
			{structure.map(({ title, place, study_time, url }, index) => (
				<>
					<p>
						{url ? (
							<Link href={url}>
								<strong>{title}</strong>
							</Link>
						) : (
							<strong>{title}</strong>
						)}
						<br />
						<span>{place}</span> ({study_time})
					</p>
					{index + 1 !== structure.length && <br />}
				</>
			))}
		</LineCounter>
	);
};

Education.displayName = "Education";
export default Education;
