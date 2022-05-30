import React from "react";

import styles from "./styles";

const GoalItem = ({ goalHeader, goalText }) => {
  const classes = styles();
  return (
    <div className={classes.goalItemContainer}>
      <div className={classes.goalImage} />
      <h3 className={classes.goalHeader}>{goalHeader}</h3>
      <p className={classes.goalText}>{goalText}</p>
    </div>
  );
};

GoalItem.defaultProps = {
  goalHeader: "Goal Header",
  goalText: "Goal Text",
};

export { GoalItem };
export default GoalItem;
