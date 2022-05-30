import React from "react";

import { Home, About, Projects, Contact } from "routes";
import { Header, Footer, ScrollToButton } from "components";
import { withScrollbars, withDimensions } from "theme";
import styles from "./styles";

const App = ({
  homeRef,
  aboutRef,
  projectsRef,
  contactRef,
  scrollToHome,
  scrollToAbout,
  scrollToProjects,
  scrollToContact,
  showScrollButton,
  breakpoints,
}) => {
  const classes = styles();

  return (
    <div>
      <div className={`${classes.pageContainer} ${classes.header}`}>
        <Header
          homeClick={scrollToHome}
          aboutClick={scrollToAbout}
          projectsClick={scrollToProjects}
          contactClick={scrollToContact}
          isMobile={breakpoints.sm}
        />
      </div>
      <div
        className={`${classes.pageContainer} ${classes.homePage}`}
        ref={homeRef}
      >
        <Home onClick={scrollToAbout} />
      </div>
      <div
        className={`${classes.pageContainer} ${classes.aboutPage}`}
        ref={aboutRef}
      >
        <About />
      </div>
      <div
        className={`${classes.pageContainer} ${classes.projectsPage}`}
        ref={projectsRef}
      >
        <Projects />
      </div>
      <div
        className={`${classes.pageContainer} ${classes.contactPage}`}
        ref={contactRef}
      >
        <Contact />
      </div>
      <div className={`${classes.pageContainer} ${classes.footer}`}>
        <Footer />
      </div>
      {showScrollButton && (
        <ScrollToButton onClick={scrollToHome} isMobile={breakpoints.sm} />
      )}
    </div>
  );
};

export default withDimensions(withScrollbars(App));
