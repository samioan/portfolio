import { CardContainer } from "components";
import { RoundButton } from "routes/about/components";
import { ReactComponent as GithubIcon } from "images/githubIcon.svg";
import { ReactComponent as GlobeIcon } from "images/globeIcon.svg";

const ProjectCard = ({ projects }) => (
  <CardContainer customClasses="ml-[28px] mr-[28px] py-[30px]">
    {projects.map((item, idx) => {
      return (
        <div key={item.title} className="flex relative px-[30px]">
          <div className="flex flex-col items-center mr-6 relative">
            <div className="w-4 h-4 rounded-full bg-[#EEEEEE] mt-[4px]" />

            {!(idx === projects.length - 1) && (
              <div className="w-[2px] bg-[rgba(238,238,238,0.3)] flex-1 mt-1" />
            )}
          </div>

          <div className="flex-1">
            <p className="mb-[5px] text-[16px] font-bold text-[#EEEEEE]">
              {item.title}
            </p>
            <p className="mb-[15px] p-0 text-[12px] leading-[12px] text-[#777]">
              {item.date}
              <span className="py-0 px-[5px]">{item?.company && "|"}</span>
              {item?.company}
            </p>
            <p className="text-[15px] leading-[1.7] text-[#a9a9a9]">
              {item.description}
            </p>

            <div className="mt-3 flex items-center gap-4">
              {item?.site && (
                <RoundButton href={item.site} icon={<GlobeIcon />} />
              )}
              {item?.repo && (
                <RoundButton href={item?.repo} icon={<GithubIcon />} />
              )}
            </div>
            {projects.indexOf(item) < projects.length - 1 && (
              <hr className="my-[30px] h-px bg-[rgba(255,255,255,0.1)] border-[rgba(0,0,0,0.12)]" />
            )}
          </div>
        </div>
      );
    })}
  </CardContainer>
);

export { ProjectCard };
export default ProjectCard;
