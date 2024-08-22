import ProfessionalInfo from "@/containers/ProfessionalInfo/ProfessionalInfo";
import { IPage } from "@/app/[locale]/page";

const ProfessionalInfoPage = ({ params }: IPage) => {
	return <ProfessionalInfo params={params} />;
};

export default ProfessionalInfoPage;
