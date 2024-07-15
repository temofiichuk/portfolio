import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import HomePage from "@/containers/Home/Home";

export interface IPage {
	params: Params;
}

async function Home({ params: { locale } }: IPage) {
	return <HomePage locale={locale} />;
}

export default Home;
