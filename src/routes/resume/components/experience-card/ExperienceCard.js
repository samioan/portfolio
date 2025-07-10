import { CardContainer } from "components";

const ExperienceCard = ({ experienceItems }) => (
  <CardContainer customClasses="ml-[28px] mr-[28px] py-[30px]">
    {experienceItems.map((item) => (
      <div key={item.title}>
        <div className="px-[30px]">
          <p className="mb-[5px] text-[16px] font-bold text-[#EEEEEE]">
            {item.title}
          </p>
          <p className="mb-[15px] p-0 text-[12px] leading-[12px] text-[#777]">
            {item.date} <span className="py-0 px-[5px]">|</span> {item.company}
          </p>
          <p className="text-[15px] leading-[1.7] text-[#a9a9a9]">
            {item.description}
          </p>
        </div>
        {experienceItems.indexOf(item) < experienceItems.length - 1 && (
          <hr className="my-[30px] h-px bg-[rgba(255,255,255,0.1)] border-[rgba(0,0,0,0.12)]" />
        )}
      </div>
    ))}
  </CardContainer>
);

export { ExperienceCard };
export default ExperienceCard;
