import { useEffect } from "react";

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

const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <PageContainer>
      <LeftColumn>
        <Title label="PORTFOLIO" />
        <Subtitle label="My Projects" customStyles={styles.subtitle} />
        <Grid container sx={styles.container}>
          <Grid container justifyContent="center">
            {projects.map((project) => (
              <Grid key={project.title} sx={styles.projectContainer}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </LeftColumn>

      <RightColumn image={bg} />
    </PageContainer>
  );
};

export { Portfolio };
export default Portfolio;
