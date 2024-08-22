import Education from "@/containers/Education/Education";
import { IPage } from "@/app/[locale]/page";

const EducationPage = ({ params }: IPage) => {
	return <Education params={params} />;
};

export default EducationPage;
