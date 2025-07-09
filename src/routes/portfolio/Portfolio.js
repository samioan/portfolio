import { useEffect } from "react";

import Grid from "@mui/material/Grid";

import { Title, InnerContainer, PageContainer, Subtitle } from "components";
import { projects } from "reference-data";

import { ProjectCard } from "./components";

import styles from "./styles";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <PageContainer>
      <InnerContainer>
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
      </InnerContainer>
    </PageContainer>
  );
};

export { Portfolio };
export default Portfolio;
