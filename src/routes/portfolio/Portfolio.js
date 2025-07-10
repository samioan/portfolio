import { useEffect } from "react";

import { Title, InnerContainer, PageContainer, Subtitle } from "components";
import { projects } from "reference-data";

import { ProjectCard } from "./components";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <PageContainer>
      <InnerContainer>
        <Title label="PORTFOLIO" />
        <Subtitle
          label="My Projects"
          customClasses="sm:mt-[138px] mt-[83px] sm:ml-[28px] ml-0 mb-[28px]"
        />
        <div className="pb-[30px]">
          <div className="flex justify-center flex-wrap">
            {projects.map((project) => (
              <div key={project.title} className="sm:w-[50%] w-full">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </InnerContainer>
    </PageContainer>
  );
};

export { Portfolio };
export default Portfolio;
