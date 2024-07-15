import styles from "./HomeBanner.module.scss";

import { Locale } from "../../../i18n.config";
import initTranslations from "@/i18n";
import Link from "next/link";
import CursorHoverDiv from "@/components/CursorHoverDiv/CursorHoverDiv";
import Typewriter from "@/components/Typewriter/Typewriter";
import { HTMLAttributes } from "react";

interface IHomeBanner extends HTMLAttributes<HTMLElement> {
	locale: Locale;
}

const i18nNamespaces = ["home"];

const HomeBanner = async ({ locale, ...props }: IHomeBanner) => {
	const { t } = await initTranslations(locale, i18nNamespaces);
	return (
		<main {...props}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<Typewriter speed={30}>
						<CursorHoverDiv className={styles.mainText}>
							<h1>
								<p className={styles.hi}>{t("hi")}</p>
								<p className={styles.name}>{t("name")}</p>
								<p className={styles.position}>{`=> ${t("position")}`}</p>
							</h1>
						</CursorHoverDiv>

						{process.env.NEXT_PUBLIC_GITHUB_LINK && (
							<div className={styles.extraWrapper}>
								<p className={styles.comment}>{`// ${t("github_advise")}`}</p>
								<p>
									<span className={styles.keyword}>const </span>
									<span className={styles.variable}>gitHubLink </span>
									<span className={styles.sign}>= </span>
									<Link
										href={process.env.NEXT_PUBLIC_GITHUB_LINK}
										className={styles.link}
										aria-label="Github Link">
										{`"${process.env.NEXT_PUBLIC_GITHUB_LINK}"`}
									</Link>
								</p>
							</div>
						)}
					</Typewriter>
				</div>
			</div>
		</main>
	);
};

HomeBanner.displayName = "HomeBanner";
export default HomeBanner;
