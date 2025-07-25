import { useEffect } from "react";

import { Title, InnerContainer, PageContainer, Subtitle } from "components";
import { personalProjects, professionalProjects } from "reference-data";

import { ProjectCard } from "./components";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <PageContainer>
      <InnerContainer>
        <Title label="PORTFOLIO" />
        <div className="flex flex-wrap sm:mt-[138px] mt-[83px] lg:w-[70%] w-full mx-auto">
          <div className="w-full mb-[102px]">
            <Subtitle
              label="Professional Projects"
              customClasses="sm:ml-[28px] ml-0 mb-[32px]"
            />
            <ProjectCard projects={professionalProjects} />
          </div>
          <div className="w-full mb-[102px]">
            <Subtitle
              label="Personal Projects"
              customClasses="sm:ml-[28px] ml-0 mb-[32px]"
            />
            <ProjectCard projects={personalProjects} />
          </div>
        </div>
      </InnerContainer>
    </PageContainer>
  );
};

export { Portfolio };
export default Portfolio;
