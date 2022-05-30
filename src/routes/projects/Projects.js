import React from "react";

import projectsData from "data/projectsData";
import { PageTitle } from "components";

import styles from "./styles";
import withProjectsProps from "./withProjectsProps";
import { ProjectCard, ProjectModal } from "./components";

const Projects = ({ modal, onModalOpen, onModalClose }) => {
  const classes = styles();

  return (
    <div className={classes.projectsContainer}>
      <PageTitle title="PROJECTS" theme="dark" />
      <div className={classes.projectsSectionContainer}>
        {Object.values(projectsData).map((item) => (
          <ProjectCard
            key={item.title}
            projectImage={item.splashImage}
            projectTitle={item.title}
            projectTagline={item.tagline}
            onClick={() => onModalOpen(item)}
          />
        ))}
      </div>
      {modal.title && (
        <ProjectModal
          title={modal.title}
          description={modal.description}
          details={modal.details}
          images={modal.images}
          link={modal.link}
          onClose={() => onModalClose()}
        />
      )}
    </div>
  );
};

export { Projects };
export default withProjectsProps(Projects);
