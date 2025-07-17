import { CardContainer } from "components";

const ContactCard = ({ icon, title, subtitle }) => (
  <div className="py-[16px] px-[28px] sm:w-[50%] w-full">
    <CardContainer customClasses="p-[20px] h-[87px]">
      <div className="flex items-start flex-nowrap">
        <img src={icon} alt={title} className="w-[40px] h-[40px]" />
        <div className="ml-[15px] overflow-hidden whitespace-nowrap">
          <p className="text-[16px] font-bold leading-[20px] text-[#EEEEEE]">
            {title}
          </p>
          <p className="text-[#a9a9a9] text-[15px] leading-[1.7] text-ellipsis overflow-hidden whitespace-nowrap">
            {subtitle}
          </p>
        </div>
      </div>
    </CardContainer>
  </div>
);

export { ContactCard };
export default ContactCard;
