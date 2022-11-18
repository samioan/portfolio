import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import styles from "./styles";

const NavMenu = ({ isMenuOpen, handleClick }) => (
  <IconButton disableRipple onClick={handleClick} sx={styles.iconButton}>
    {isMenuOpen ? (
      <CloseIcon sx={styles.icon} />
    ) : (
      <MenuIcon sx={styles.icon} />
    )}
  </IconButton>
);

export { NavMenu };
export default NavMenu;
