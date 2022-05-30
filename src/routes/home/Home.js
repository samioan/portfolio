import React from "react";

import { Logo, WorkButton, IntroText } from "./components";

import styles from "./styles";

const Home = ({ onClick }) => {
  const classes = styles();

  return (
    <div className={classes.homeContainer}>
      <Logo />
      <IntroText />
      <WorkButton onClick={onClick} />
    </div>
  );
};

export { Home };
export default Home;
