import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "@/styles/globals.scss";
import styles from "./app.module.scss";
import { ReactNode } from "react";
import { i18n } from "../../../i18n.config";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { dir } from "i18next";
import Header from "@/components/Header/Header";
import TranslationsProvider from "@/providers/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer/Footer";

const ThemeProvider = dynamic(() => import("@/providers/ThemeProvider"), {
	ssr: false,
});

const FIRA_CODE = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Web Developer",
	description: "Portfolio of Mykhailo Temofiichuk",
};

export function generateStaticParams() {
	return i18n.locales.map((locale) => ({ locale }));
}

const i18nNamespaces = ["app-layout"];

export default async function RootLayout({
	children,
	params: { locale, route },
}: Readonly<{
	children: ReactNode;
	params: Params;
}>) {
	const { resources } = await initTranslations(locale, i18nNamespaces);

	return (
		<html lang={locale} dir={dir(locale)} suppressHydrationWarning={true}>
			<body className={FIRA_CODE.className}>
				<ThemeProvider>
					<main className={styles.main}>
						<TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
							<div className={styles.wrapper}>
								<Header className={"mb-auto"} route={route} />
								<div className={styles.pageWrapper}>{children}</div>
								<Footer className={"mt-auto"} locale={locale} />
							</div>
						</TranslationsProvider>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}