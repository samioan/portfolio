import { CardContainer } from "components";

const SkillsCard = ({ skillItems }) => (
  <CardContainer customClasses="ml-[28px] mr-[28px] py-[20px]">
    {skillItems.map((item) => (
      <div key={item.title}>
        <div className="px-[30px]">
          <p className="mb-[10px] text-[14px] leading-[14px] text-[#EEEEEE] font-bold">
            {item.title}
          </p>
        </div>
        {skillItems.indexOf(item) < skillItems.length - 1 && (
          <hr className="my-[20px] h-px bg-[rgba(255,255,255,0.1)] border-[rgba(0,0,0,0.12)]" />
        )}
      </div>
    ))}
  </CardContainer>
);

export { SkillsCard };
export default SkillsCard;
