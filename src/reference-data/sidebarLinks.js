import { ReactComponent as HomeIcon } from "images/homeIcon.svg";
import { ReactComponent as AboutIcon } from "images/aboutIcon.svg";
import { ReactComponent as ResumeIcon } from "images/resumeIcon.svg";
import { ReactComponent as PortfolioIcon } from "images/portfolioIcon.svg";
import { ReactComponent as ContactIcon } from "images/contactIcon.svg";
import { ReactComponent as GithubIcon } from "images/githubIcon.svg";
import { ReactComponent as LinkedinFilledIcon } from "images/linkedinFilledIcon.svg";

const sidebarLinks = {
  top: [
    {
      title: "Home",
      component: <HomeIcon />,
      href: "/",
    },
    {
      title: "About",
      component: <AboutIcon />,
      href: "/about",
    },
    {
      title: "Resume",
      component: <ResumeIcon />,
      href: "/resume",
    },
    {
      title: "Portfolio",
      component: <PortfolioIcon />,
      href: "/portfolio",
    },
    {
      title: "Contact",
      component: <ContactIcon />,
      href: "/contact",
    },
  ],
  bottom: [
    {
      title: "Github",
      component: <GithubIcon />,
      href: "https://github.com/samioan",
    },
    {
      title: "Linkedin",
      component: <LinkedinFilledIcon />,
      href: "https://www.linkedin.com/in/ioannis-siampalias/",
    },
  ],
};

export default sidebarLinks;
