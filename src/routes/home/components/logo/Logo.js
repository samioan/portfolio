import React from "react";

import { logo } from "./images";
import styles from "./styles";

const Logo = () => {
  const classes = styles();
  return <img src={logo} alt="Logo" className={classes.logo} />;
};

export { Logo };
export default Logo;
