import { NavLink } from "react-router-dom";

import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import WebhookOutlinedIcon from "@mui/icons-material/WebhookOutlined";

import styles from "./styles";
import classes from "./Logo.module.css";

const Logo = () => (
  <Grid
    container
    alignItems="center"
    justifyContent="center"
    sx={styles.logoContainer}
  >
    <IconButton disableRipple sx={styles.logo}>
      <NavLink end to="/" className={classes.logo}>
        <WebhookOutlinedIcon />
      </NavLink>
    </IconButton>
  </Grid>
);

export { Logo };
export default Logo;
