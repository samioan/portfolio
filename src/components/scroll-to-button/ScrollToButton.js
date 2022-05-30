import React from "react";

import { arrow } from "./images";

import styles from "./styles";

const ScrollToButton = ({ onClick, isMobile }) => {
  const classes = styles();

  return (
    <>
      {isMobile ? (
        <button onClick={onClick} className={classes.mobileScrollButton}>
          <p className={classes.scrollButtonText}>BACK TO TOP</p>
        </button>
      ) : (
        <button onClick={onClick} className={classes.scrollButton}>
          <img src={arrow} alt="Arrow" />
        </button>
      )}
    </>
  );
};

export { ScrollToButton };
export default ScrollToButton;
