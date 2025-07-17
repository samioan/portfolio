import { CardContainer } from "components";

const ServiceCard = ({ icon, title, description }) => (
  <div className="py-[16px] px-[28px] sm:w-[50%] w-full">
    <CardContainer customClasses="p-[30px] min-h-[236px]">
      <img src={icon} alt={title} className="w-[50px]" />
      <p className="mt-[16px] mb-[10px] text-[16px] font-bold text-[#EEEEEE]">
        {title}
      </p>
      <p className="text-[15px] leading-[1.7] text-[#a9a9a9]">{description}</p>
    </CardContainer>
  </div>
);

export { ServiceCard };
export default ServiceCard;
