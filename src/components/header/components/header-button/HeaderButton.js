import React from "react";

import { withDimensions } from "theme";
import styles from "./styles";

const HeaderButton = ({ onClick, label, isMobile, icon }) => {
  const classes = styles();

  return (
    <>
      {isMobile ? (
        <button className={classes.headerIconButton} onClick={onClick}>
          <img className={classes.headerIcon} src={icon} alt={label} />
        </button>
      ) : (
        <button className={classes.headerButton} onClick={onClick}>
          <p className={classes.headerButtonText}>{label}</p>
        </button>
      )}
    </>
  );
};

export { HeaderButton };
export default withDimensions(HeaderButton);
