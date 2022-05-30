import React from "react";

import { HeaderButton } from "./components";
import { homeIcon, aboutIcon, projectsIcon, contactIcon } from "./images";

import styles from "./styles";

const Header = ({
  homeClick,
  aboutClick,
  projectsClick,
  contactClick,
  isMobile,
}) => {
  const classes = styles();

  return (
    <div className={classes.headerContainer}>
      <HeaderButton
        label="home"
        onClick={homeClick}
        isMobile={isMobile}
        icon={homeIcon}
      />
      <HeaderButton
        label="about"
        onClick={aboutClick}
        isMobile={isMobile}
        icon={aboutIcon}
      />
      <HeaderButton
        label="projects"
        onClick={projectsClick}
        isMobile={isMobile}
        icon={projectsIcon}
      />
      <HeaderButton
        label="contact"
        onClick={contactClick}
        isMobile={isMobile}
        icon={contactIcon}
      />
    </div>
  );
};

export { Header };
export default Header;
