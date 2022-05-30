import React from "react";

import skillsData from "data/skillsData";
import { PageTitle } from "components";
import { GoalItem, ProfileDetails, SkillBar } from "./components";

import styles from "./styles";

const About = () => {
  const classes = styles();
  return (
    <div className={classes.aboutContainer}>
      <PageTitle title="ABOUT" theme="dark" />
      <div className={classes.goalsSectionContainer}>
        <GoalItem />
        <GoalItem />
        <GoalItem />
        <GoalItem />
      </div>

      <div className={classes.profileSectionContainer}>
        <ProfileDetails />
        <div className={classes.skillsContainer}>
          {Object.values(skillsData).map((item) => (
            <SkillBar
              key={item.title}
              skillTitle={item.title}
              skillPercent={item.percent}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { About };
export default About;
