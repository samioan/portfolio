import Typography from "@mui/material/Typography";

import styles from "./styles";
import classes from "./BioText.module.css";

const BioText = () => (
  <Typography align="center" color="text.secondary" sx={styles.text}>
    <span className={classes.emphasis}>Hello, I’m John</span>, a front-end
    developer based in Athens. I'm experienced in web engineering and game
    development. Also I have good knowledge in{" "}
    <span className={classes.emphasis}>
      React, Redux, RxJS and Material UI.
    </span>
  </Typography>
);

export { BioText };
export default BioText;
