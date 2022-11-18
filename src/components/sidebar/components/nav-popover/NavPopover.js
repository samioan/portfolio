import Paper from "@mui/material/Paper";
import Fade from "@mui/material/Fade";
import Popper from "@mui/material/Popper";

import styles from "./styles";

const NavPopover = ({ children, open, anchorEl, onClose }) => (
  <Popper open={open} anchorEl={anchorEl} onClose={onClose} transition>
    {({ TransitionProps }) => (
      <Fade {...TransitionProps} timeout={350}>
        <Paper sx={styles.paper}>{children}</Paper>
      </Fade>
    )}
  </Popper>
);

export { NavPopover };
export default NavPopover;
