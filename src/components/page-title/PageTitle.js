import React from "react";

import styles from "./styles";

const PageTitle = ({ title, theme }) => {
  const classes = styles();
  return (
    <>
      <h1
        className={`${classes.title} ${
          theme === "dark" ? classes.titleDark : classes.titleLight
        }`}
      >
        {title}
      </h1>
      <div
        className={`${classes.divider} ${
          theme === "dark" ? classes.dividerDark : classes.dividerLight
        }`}
      />
    </>
  );
};

export { PageTitle };
export default PageTitle;
