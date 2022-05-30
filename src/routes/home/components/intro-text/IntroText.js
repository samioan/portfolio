import React from "react";

import styles from "./styles";

const IntroText = () => {
  const classes = styles();

  return (
    <div className={classes.textContainer}>
      <h1 className={classes.topText}>Ioannis Siampalias</h1>
      <h1 className={classes.bottomText}>Front-end web developer</h1>
    </div>
  );
};

export { IntroText };
export default IntroText;
