import React from "react";

import styles from "./styles";

const FooterButton = ({ link, label, icon }) => {
  const classes = styles();

  return (
    <button
      className={classes.footerButton}
      onClick={() => window.open(link, "_self")}
    >
      <img className={classes.footerIcon} src={icon} alt={label} />
    </button>
  );
};

export { FooterButton };
export default FooterButton;
