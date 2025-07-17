import { CardContainer } from "components";

const ProjectCard = ({ project }) => (
  <CardContainer customClasses="my-[16px] mx-[28px]">
    <div>
      <div className="flex relative overflow-hidden rounded-t-[18px]">
        <a
          href={project?.link}
          target="_blank"
          rel="noreferrer"
          className="flex"
        >
          <img
            src={project.image}
            alt={project.title}
            className="object-cover overflow-hidden w-full h-auto"
          />
        </a>
      </div>
      <div className="p-[15px] h-[80px]">
        <p
          className="text-center text-[16px] font-bold mb-[8px] text-[#EEEEEE]"
          s
        >
          {project.title}
        </p>
        <p
          className="text-center text-[12px] leading-[12px] text-[#777]"
          align="center"
        >
          {project.subtitle}
        </p>
      </div>
    </div>
  </CardContainer>
);

export { ProjectCard };
export default ProjectCard;
