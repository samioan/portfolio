import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { CardContainer } from "components";

import styles from "./styles";
import classes from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => (
  <CardContainer customStyles={styles.cardContainer}>
    <Grid>
      <div className={classes.imageContainer}>
        <a
          href={project?.link}
          target="_blank"
          rel="noreferrer"
          className={classes.link}
        >
          <img
            src={project.image}
            alt={project.title}
            className={classes.image}
          />
        </a>
      </div>
      <Grid sx={styles.textContainer}>
        <Typography align="center" color="light.main" sx={styles.title}>
          {project.title}
        </Typography>
        <Typography align="center" sx={styles.subtitle}>
          {project.subtitle}
        </Typography>
      </Grid>
    </Grid>
  </CardContainer>
);

export { ProjectCard };
export default ProjectCard;
