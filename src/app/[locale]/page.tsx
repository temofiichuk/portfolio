import initTranslations from "@/i18n";
import TranslationsProvider from "@/providers/TranslationsProvider";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import HomeBanner from "@/components/HomeBanner/HomeBanner";

interface IPage {
	params: Params;
}

const i18nNamespaces = ["home"];

async function Home({ params: { locale } }: IPage) {
	const { resources } = await initTranslations(locale, i18nNamespaces);

	return (
		<TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
			<HomeBanner locale={locale} />
		</TranslationsProvider>
	);
}

export default Home;
