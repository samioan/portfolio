import React from "react";

import styles from "./styles";

const ProjectCard = ({
  projectTitle,
  projectTagline,
  projectImage,
  onClick,
}) => {
  const classes = styles();
  return (
    <div className={classes.projectCardContainer}>
      <img className={classes.projectImage} src={projectImage} alt="Project" />
      <div className={classes.detailsContainer}>
        <div>
          <h3 className={classes.projectHeader}>{projectTitle}</h3>
          <p className={classes.projectText}>{projectTagline}</p>
        </div>
        <div>
          <button className={classes.projectButton} onClick={onClick}>
            <p className={classes.projectButtonText}>LEARN MORE</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
export default ProjectCard;
