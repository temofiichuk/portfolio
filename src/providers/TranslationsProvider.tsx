"use client";

import { I18nextProvider } from "react-i18next";
import initTranslations from "@/i18n";
import { createInstance, Namespace, Resource } from "i18next";
import { PropsWithChildren } from "react";
import { Locale } from "../../i18n.config";

interface ITranslationsProvider extends PropsWithChildren {
	locale: Locale;
	namespaces: Namespace[];
	resources: Resource[];
}

export default function TranslationsProvider({
	children,
	locale,
	namespaces,
	resources,
}: ITranslationsProvider) {
	const i18n = createInstance();

	initTranslations(locale, namespaces, i18n, resources);

	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
