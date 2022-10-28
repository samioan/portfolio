import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Typewriter from "typewriter-effect";

import styles from "./styles";
import classes from "./Home.module.css";

const Home = () => (
  <Grid
    container
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={styles.container}
  >
    <Grid sx={styles.innerContainer}>
      <Typography
        variant="h1"
        align="center"
        color="white.main"
        sx={styles.title}
      >
        <span className={classes.name}>Ioannis</span> Siampalias
      </Typography>
      <Grid container alignItems="center" justifyContent="center">
        <Typography color="text.secondary" sx={styles.subtitle}>
          I am a
        </Typography>
        <Typewriter
          options={{
            strings: [
              "front-end engineer",
              "game developer",
              "musician",
              "freelancer",
              "blogger",
            ],
            autoStart: true,
            loop: true,
            wrapperClassName: classes.typewriterText,
            cursorClassName: classes.typewriterCursor,
          }}
        />
      </Grid>
    </Grid>
  </Grid>
);

export { Home };
export default Home;
