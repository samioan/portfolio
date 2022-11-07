import Grid from "@mui/material/Grid";

import {
  Title,
  RightColumn,
  LeftColumn,
  PageContainer,
  Subtitle,
} from "components";

import { ProjectCard } from "./components";

import styles from "./styles";

const projects = [
  {
    image: "https://bslthemes.com/html/patrick/images/works/work1.jpg",
    title: "Motorcycle Helmet",
    subtitle: "Photo",
  },
  {
    image: "https://bslthemes.com/html/patrick/images/works/work2.jpg",
    title: "Motorcycle Helmet",
    subtitle: "Photo",
  },
  {
    image: "https://bslthemes.com/html/patrick/images/works/work1.jpg",
    title: "Motorcycle Helmet",
    subtitle: "Photo",
  },
  {
    image: "https://bslthemes.com/html/patrick/images/works/work2.jpg",
    title: "Motorcycle Helmet",
    subtitle: "Photo",
  },
];

const Portfolio = () => (
  <PageContainer>
    <LeftColumn>
      <Title label="PORTFOLIO" />
      <Subtitle label="My Projects" customStyles={styles.subtitle} />
      <Grid container sx={styles.container}>
        <Grid container direction="column" wrap="nowrap" sx={styles.column}>
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </Grid>
        <Grid container direction="column" wrap="nowrap" sx={styles.column}>
          {Array.from(projects)
            .reverse()
            .map((project) => (
              <ProjectCard project={project} />
            ))}
        </Grid>
      </Grid>
    </LeftColumn>

    <RightColumn image="https://www.bestmenswear.com/images/Suits/1Suit.jpg" />
  </PageContainer>
);

export { Portfolio };
export default Portfolio;
