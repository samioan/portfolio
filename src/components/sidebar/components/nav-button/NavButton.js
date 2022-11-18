import { NavLink } from "react-router-dom";

import Tooltip from "@mui/material/Tooltip";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";

import styles from "./styles";
import classes from "./NavButton.module.css";

const NavButton = ({ isTop, title, href, component }) => {
  const theme = useTheme();
  const isXl = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isTop ? (
        <Tooltip
          title={title}
          arrow
          placement={isXl ? "bottom" : "right"}
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
      ) : (
        <IconButton
          disableRipple
          sx={styles.bottomIconButton}
          target="_blank"
          href={href}
        >
          {component}
        </IconButton>
      )}
    </>
  );
};

export { NavButton };
export default NavButton;
