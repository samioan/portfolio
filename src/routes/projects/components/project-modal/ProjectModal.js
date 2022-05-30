import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

import { closeIcon } from "./images";
import { ProjectModalCarousel } from "./components";
import styles from "./styles";

const ProjectModal = ({
  title,
  description,
  details,
  onClose,
  images,
  link,
}) => {
  const classes = styles();

  return (
    <div className={classes.modalWindow} onClick={onClose}>
      <div
        className={classes.modalContainer}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className={classes.modalHeaderContainer}>
          <div className={classes.modalHeader}>
            <h3 className={classes.modalTitle}>{title}</h3>
            <button className={classes.modalCloseButton} onClick={onClose}>
              <img src={closeIcon} alt="Close" className={classes.icon} />
            </button>
          </div>

          <p className={classes.modalTagline}>{description}</p>
        </div>

        <div className={classes.divider} />

        <div className={classes.modalContent}>
          <ProjectModalCarousel images={images} />
          <Scrollbars autoHeight autoHeightMin="auto" autoHeightMax={150}>
            <p className={classes.modalDescription}>{details}</p>
          </Scrollbars>
        </div>

        <div className={classes.modalButtonsContainer}>
          {link && (
            <button
              className={classes.modalButton}
              onClick={() => window.open(link)}
            >
              <p className={classes.modalButtonText}>VIEW SITE</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { ProjectModal };
export default ProjectModal;
