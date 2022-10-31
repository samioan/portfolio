import Grid from "@mui/material/Grid";

import {
  Title,
  RightColumn,
  LeftColumn,
  PageContainer,
  Subtitle,
} from "components";

import styles from "./styles";
import { ExperienceCard, SkillsCard } from "./components";

const experienceItems = [
  {
    title: "Web Development",
    date: "2013-Present",
    company: "Facebook Inc.",
    description:
      "Collaborate with creative and development teams on the execution of ideas.",
  },
  {
    title: "Web Development",
    date: "2013-Present",
    company: "Facebook Inc.",
    description:
      "Collaborate with creative and development teams on the execution of ideas.",
  },
  {
    title: "Web Development",
    date: "2013-Present",
    company: "Facebook Inc.",
    description:
      "Collaborate with creative and development teams on the execution of ideas.",
  },
];

const skillItems = [
  { title: "Communication", percentage: 50 },
  { title: "Communication", percentage: 40 },
  { title: "Communication", percentage: 70 },
  { title: "Communication", percentage: 20 },
];

const Resume = () => (
  <PageContainer>
    <LeftColumn>
      <Title label="RESUME" />
      <Grid container sx={styles.pageContainer}>
        <Grid item sx={styles.topCardContainer}>
          <Subtitle label="My Experience" customStyles={styles.subtitle} />

          <ExperienceCard experienceItems={experienceItems} />
        </Grid>
        <Grid item sx={styles.topCardContainer}>
          <Subtitle label="My Education" customStyles={styles.subtitle} />

          <ExperienceCard experienceItems={experienceItems} />
        </Grid>
        <Grid item sx={styles.bottomCardContainer}>
          <Subtitle
            label="Personal Skills"
            customStyles={styles.bottomSubtitle}
          />
          <SkillsCard skillItems={skillItems} />
        </Grid>
        <Grid item sx={styles.bottomCardContainer}>
          <Subtitle
            label="Professional Skills"
            customStyles={styles.bottomSubtitle}
          />
          <SkillsCard skillItems={skillItems} />
        </Grid>
      </Grid>
    </LeftColumn>

    <RightColumn image="https://www.bestmenswear.com/images/Suits/1Suit.jpg" />
  </PageContainer>
);

export { Resume };
export default Resume;
