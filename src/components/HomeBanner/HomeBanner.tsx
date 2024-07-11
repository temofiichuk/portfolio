import styles from "./HomeBanner.module.scss";

import { Locale } from "../../../i18n.config";
import initTranslations from "@/i18n";
import Link from "next/link";

import dynamic from "next/dynamic";
import CursorHoverDiv from "@/components/CursorHoverDiv/CursorHoverDiv";
import Typewriter from "@/components/Typewriter/Typewriter";

const RandomCanvasAnimation = dynamic(
	() => import("@/components/RandomCanvasAnimation/RandomCanvasAnimation")
);

interface IHomeBanner {
	locale: Locale;
}

const HomeBanner = async ({ locale }: IHomeBanner) => {
	const { t } = await initTranslations(locale, ["home"]);
	return (
		<div className={styles.banner}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<Typewriter speed={30}>
						<CursorHoverDiv className={styles.mainText}>
							<p className={styles.hi}>{t("hi")}</p>
							<h1 className={styles.name}>{t("name")}</h1>
							<p className={styles.position}>
								{"=> "}
								{t("position")}
							</p>
						</CursorHoverDiv>

						{process.env.NEXT_PUBLIC_GITHUB_LINK && (
							<div className={styles.extraWrapper}>
								<p className={styles.comment}>
									{"//"} {t("github_advise")}
								</p>
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
			<RandomCanvasAnimation className={styles.anima} />
		</div>
	);
};

HomeBanner.displayName = "HomeBanner";
export default HomeBanner;
