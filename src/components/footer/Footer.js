import React from "react";

import { FooterButton } from "./components";
import { githubIcon, linkedinIcon, emailIcon } from "./images";
import styles from "./styles";

const Footer = () => {
  const classes = styles();

  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerButtonContainer}>
        <FooterButton
          link="https://github.com/samioan"
          label="Github"
          icon={githubIcon}
        />
        <FooterButton
          link="https://www.linkedin.com/in/ioannis-siampalias/"
          label="Linkedin"
          icon={linkedinIcon}
        />
        <FooterButton
          link="mailto:ioannis.siampalias@gmail.com"
          label="Email"
          icon={emailIcon}
        />
      </div>
      <div>
        <p className={classes.footerBottomText}>
          IOANNIS SIAMPALIAS &copy;2022
        </p>
      </div>
    </div>
  );
};

export { Footer };
export default Footer;
