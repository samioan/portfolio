import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { CardContainer } from "components";

import styles from "./styles";
import classes from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => (
  <CardContainer customStyles={styles.cardContainer}>
    <Grid>
      <div className={classes.imageContainer}>
        <img
          src={project.image}
          alt={project.title}
          className={classes.image}
        />
      </div>
      <Grid sx={styles.textContainer}>
        <Typography align="center" color="white.main" sx={styles.title}>
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
