import React from "react";

import styles from "./styles";

const SkillBar = ({ skillTitle, skillPercent }) => {
  const classes = styles();
  return (
    <div className={classes.skillbarContainer}>
      <div className={classes.skillText}>{skillTitle}</div>
      <div className={classes.skillBar} style={{ width: `${skillPercent}%` }} />
      <div
        className={classes.skillBarRemaining}
        style={{ width: `calc(100% - ${skillPercent}%)` }}
      />
      <div className={classes.skillPercent}>{`${skillPercent}%`}</div>
    </div>
  );
};

SkillBar.defaultProps = {
  skillTitle: "Skill",
  skillPercent: "50",
};

export { SkillBar };
export default SkillBar;
