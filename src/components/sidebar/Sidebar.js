import { NavLink } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import WebhookOutlinedIcon from "@mui/icons-material/WebhookOutlined";

import styles from "./styles";
import withSidebar from "./withSidebar";
import classes from "./Sidebar.module.css";

const Sidebar = ({ topSidebarButtons, bottomSidebarButtons }) => (
  <Grid container direction="column" sx={styles.container}>
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={styles.innerContainer}
    >
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
      {topSidebarButtons.map(({ title, component, href }) => (
        <Tooltip
          key={title}
          title={title}
          arrow
          placement="right"
          classes={{ popper: classes.tooltip }}
        >
          <IconButton disableRipple sx={styles.iconButton}>
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? classes.activeIconLink : classes.iconLink
              }
              to={href}
            >
              {component}
            </NavLink>
          </IconButton>
        </Tooltip>
      ))}
    </Grid>
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={styles.innerContainer}
    >
      {bottomSidebarButtons.map(({ title, component, href }) => (
        <Tooltip
          key={title}
          title={title}
          arrow
          placement="right"
          classes={{ popper: classes.tooltip }}
        >
          <IconButton
            disableRipple
            sx={styles.bottomIconButton}
            target="_blank"
            href={href}
          >
            {component}
          </IconButton>
        </Tooltip>
      ))}
    </Grid>
  </Grid>
);

export { Sidebar };
export default withSidebar(Sidebar);
