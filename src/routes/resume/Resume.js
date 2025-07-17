import { useEffect } from "react";

import { Title, InnerContainer, PageContainer, Subtitle } from "components";
import {
  experience,
  education,
  personalSkills,
  professionalSkills,
} from "reference-data";

import { ExperienceCard, SkillsCard } from "./components";

const Resume = () => {
  useEffect(() => {
    document.title = "Resume";
  }, []);

  return (
    <PageContainer>
      <InnerContainer>
        <Title label="RESUME" />
        <div className="flex flex-wrap sm:mt-[138px] mt-[83px]">
          <div className="md:w-[50%] w-full md:mb-0 mb-[102px]">
            <Subtitle
              label="My Experience"
              customClasses="sm:ml-[28px] ml-0 mb-[32px]"
            />

            <ExperienceCard experienceItems={experience} />
          </div>
          <div className="md:w-[50%] w-full md:mb-0 mb-[102px]">
            <Subtitle
              label="My Education"
              customClasses="sm:ml-[28px] ml-0 mb-[32px]"
            />

            <ExperienceCard experienceItems={education} />
          </div>
          <div className="md:mt-[102px] mt-0 md:w-[50%] w-full sm:mb-[46px] mb-[102px]">
            <Subtitle
              label="Personal Skills"
              customClasses="sm:ml-[28px] ml-0 mb-[32px]"
            />
            <SkillsCard skillItems={personalSkills} />
          </div>
          <div className="md:mt-[102px] mt-0 md:w-[50%] w-full mb-[46px]">
            <Subtitle
              label="Professional Skills"
              customClasses="sm:ml-[28px] ml-0 mb-[32px]"
            />
            <SkillsCard skillItems={professionalSkills} />
          </div>
        </div>
      </InnerContainer>
    </PageContainer>
  );
};

export { Resume };
export default Resume;
