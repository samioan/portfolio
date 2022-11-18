import Grid from "@mui/material/Grid";

import {
  Title,
  RightColumn,
  LeftColumn,
  PageContainer,
  Subtitle,
} from "components";
import { projects } from "reference-data";
import { bg } from "images";

import { ProjectCard } from "./components";

import styles from "./styles";

const Portfolio = () => (
  <PageContainer>
    <LeftColumn>
      <Title label="PORTFOLIO" />
      <Subtitle label="My Projects" customStyles={styles.subtitle} />
      <Grid container sx={styles.container}>
        <Grid container direction="column" wrap="nowrap" sx={styles.column}>
          {projects.slice(0, Math.floor(projects.length / 2)).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </Grid>
        <Grid container direction="column" wrap="nowrap" sx={styles.column}>
          {projects
            .slice(Math.floor(projects.length / 2), projects.length)
            .map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
        </Grid>
      </Grid>
    </LeftColumn>

    <RightColumn image={bg} />
  </PageContainer>
);

export { Portfolio };
export default Portfolio;
