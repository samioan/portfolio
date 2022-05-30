import React from "react";

import styles from "./styles";

const WorkButton = ({ onClick }) => {
  const classes = styles();
  return (
    <button className={classes.button} onClick={onClick}>
      <p className={classes.buttonText}>VIEW MY WORK</p>
    </button>
  );
};

export { WorkButton };
export default WorkButton;
