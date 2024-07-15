import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import HomeBanner from "@/components/HomeBanner/HomeBanner";

export interface IPage {
	params: Params;
}

async function Home({ params: { locale } }: IPage) {
	return <HomeBanner locale={locale} />;
}

export default Home;
