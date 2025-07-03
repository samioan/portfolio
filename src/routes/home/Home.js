import { useEffect } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Typewriter from "typewriter-effect";

import styles from "./styles";
import classes from "./Home.module.css";

const Home = () => {
  useEffect(() => {
    document.title = "Ioannis Siampalias";
  }, []);

  return (
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
          color="light.main"
          sx={styles.title}
        >
          <span className={classes.name}>Ioannis</span> Siampalias
        </Typography>
        <Grid container alignItems="center" justifyContent="center">
          <Typography color="textColor.main" sx={styles.subtitle}>
            I am a
          </Typography>
          <Typewriter
            options={{
              strings: [
                "frontend engineer",
                "game developer",
                "musician",
                "freelancer",
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
};

export { Home };
export default Home;
