import styles from "./HomeBanner.module.scss";

import { Locale } from "../../../i18n.config";
import initTranslations from "@/i18n";
import Link from "next/link";
import CursorHoverDiv from "@/components/CursorHoverDiv/CursorHoverDiv";
import Typewriter from "@/components/Typewriter/Typewriter";
import { HTMLAttributes } from "react";
import localFont from "next/font/local";
import MotionDiv from "@/components/MotionDiv";

const MONOTON = localFont({
	src: "./Monoton-Regular.ttf",
});

interface IHomeBanner extends HTMLAttributes<HTMLElement> {
	locale: Locale;
}

const i18nNamespaces = ["home"];

const HomeBanner = async ({ locale, ...props }: IHomeBanner) => {
	const { t } = await initTranslations(locale, i18nNamespaces);
	const name = [t("first_name").split(""), t("last_name").split("")];

	return (
		<main {...props}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<CursorHoverDiv className={styles.mainText}>
						<h1>
							<Typewriter speed={30}>
								<p className={styles.hi}>{t("hi")}</p>
							</Typewriter>
							<div className={`${styles.name} ${MONOTON.className} `}>
								{name.map((item, i) => (
									<div key={`${item}.${i}`} className={"flex overflow-hidden"}>
										{item.map((letter: string, index: number) => (
											<MotionDiv
												transition={{ delay: index * 0.1 + i + 1.5, duration: 0.35 }}
												initial={{ y: 100 }}
												animate={{ y: 0 }}
												key={`${i}.${letter}.${index}`}>
												{letter}
											</MotionDiv>
										))}
									</div>
								))}
							</div>
							<Typewriter delay={4000} speed={30}>
								<p className={styles.position}>
									{"=>"} <span>{t("position")}</span>
								</p>
							</Typewriter>
						</h1>
					</CursorHoverDiv>

					{process.env.NEXT_PUBLIC_GITHUB_LINK && (
						<MotionDiv initial={{ y: 100 }} animate={{ y: 0 }} className={styles.extraWrapper}>
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
						</MotionDiv>
					)}
				</div>
			</div>
		</main>
	);
};

HomeBanner.displayName = "HomeBanner";
export default HomeBanner;
