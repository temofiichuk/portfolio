import initTranslations from "@/i18n";
import TranslationsProvider from "@/providers/TranslationsProvider";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

interface IPage {
	params: Params;
}

const i18nNamespaces = ["home"];

export default async function Home({ params: { locale } }: IPage) {
	const { t, resources } = await initTranslations(locale, i18nNamespaces);
	return (
		<TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
			<section>
				<h1>{t("heading")}</h1>
			</section>
		</TranslationsProvider>
	);
}
