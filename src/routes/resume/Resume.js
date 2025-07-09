import { useEffect } from "react";

import Grid from "@mui/material/Grid";

import { Title, InnerContainer, PageContainer, Subtitle } from "components";
import {
  experience,
  education,
  personalSkills,
  professionalSkills,
} from "reference-data";

import styles from "./styles";
import { ExperienceCard, SkillsCard } from "./components";

const Resume = () => {
  useEffect(() => {
    document.title = "Resume";
  }, []);

  return (
    <PageContainer>
      <InnerContainer>
        <Title label="RESUME" />
        <Grid container sx={styles.pageContainer}>
          <Grid item sx={styles.topCardContainer}>
            <Subtitle label="My Experience" customStyles={styles.subtitle} />

            <ExperienceCard experienceItems={experience} />
          </Grid>
          <Grid item sx={styles.topCardContainer}>
            <Subtitle label="My Education" customStyles={styles.subtitle} />

            <ExperienceCard experienceItems={education} />
          </Grid>
          <Grid item sx={styles.bottomCardContainer}>
            <Subtitle
              label="Personal Skills"
              customStyles={styles.bottomSubtitle}
            />
            <SkillsCard skillItems={personalSkills} />
          </Grid>
          <Grid item sx={styles.bottomFinalCardContainer}>
            <Subtitle
              label="Professional Skills"
              customStyles={styles.bottomSubtitle}
            />
            <SkillsCard skillItems={professionalSkills} />
          </Grid>
        </Grid>
      </InnerContainer>
    </PageContainer>
  );
};

export { Resume };
export default Resume;
