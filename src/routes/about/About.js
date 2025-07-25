import { useEffect } from "react";

import { Title, InnerContainer, Subtitle, PageContainer } from "components";
import { services, pageData } from "reference-data";

import { CvButton, RoundButton, ServiceCard, BioText } from "./components";
import { ReactComponent as GithubIcon } from "images/githubIcon.svg";
import { ReactComponent as LinkedinFilledIcon } from "images/linkedinFilledIcon.svg";

const About = () => {
  useEffect(() => {
    document.title = pageData.about.documentTitle;
  }, []);

  return (
    <PageContainer>
      <InnerContainer>
        <Title label={pageData.about.pageTitle} />
        <div className="sm:pt-[116px] pt-[76px] w-full px-[28px]">
          <BioText />
          <div className="flex items-center justify-center gap-[20px]">
            <CvButton />
            <RoundButton
              href="https://github.com/samioan"
              icon={<GithubIcon />}
            />
            <RoundButton
              href="https://www.linkedin.com/in/ioannis-siampalias/"
              icon={<LinkedinFilledIcon />}
            />
          </div>
        </div>

        <Subtitle
          label={pageData.about.pageSubtitles.myServices}
          customClasses="sm:mt-[102px] mt-[82px] sm:pl-[28px] pl-0 pb-[16px]"
        />

        <div className="flex justify-between flex-wrap pb-[30px]">
          {services?.map(({ icon, title, description }) => (
            <ServiceCard
              key={title}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </div>
      </InnerContainer>
    </PageContainer>
  );
};

export { About };
export default About;
