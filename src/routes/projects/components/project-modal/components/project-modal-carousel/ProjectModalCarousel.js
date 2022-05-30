import React, { useState } from "react";

import styles from "./styles";

const ProjectModalCarousel = ({ images }) => {
  const classes = styles();

  const [carouselImage, setCarouselImage] = useState(0);

  return (
    <div className={classes.carouselContainer}>
      <div className={classes.imageContainer}>
        <div className={classes.numberText}>
          {`${carouselImage + 1} / ${images.length}`}
        </div>
        <img
          src={images[carouselImage]}
          alt="Project"
          className={classes.image}
        />
      </div>
      {carouselImage !== 0 && (
        <button
          className={classes.button}
          onClick={() => setCarouselImage(carouselImage - 1)}
        >
          &#10094;
        </button>
      )}
      {carouselImage !== images.length - 1 && (
        <button
          className={`${classes.button} ${classes.nextButton}`}
          onClick={() => setCarouselImage(carouselImage + 1)}
        >
          &#10095;
        </button>
      )}
    </div>
  );
};

export { ProjectModalCarousel };
export default ProjectModalCarousel;
