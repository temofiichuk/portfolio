import { IPage } from "@/app/[locale]/page";
import PersonalBio from "@/containers/PersonalBio/PersonalBio";

async function Bio({ params }: IPage) {
	return <PersonalBio params={params} />;
}

export default Bio;
