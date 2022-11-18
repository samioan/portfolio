import Grid from "@mui/material/Grid";

import styles from "./styles";
import withSidebar from "./withSidebar";
import { Logo, NavButton, NavPopover, NavMenu } from "./components";

const Sidebar = ({
  topSidebarButtons,
  bottomSidebarButtons,
  isXl,
  open,
  anchorEl,
  handleClick,
}) => {
  return (
    <Grid container sx={styles.container}>
      <Grid container alignItems="center" sx={styles.innerContainer}>
        <Logo />
        {!isXl &&
          topSidebarButtons.map(({ title, component, href }) => (
            <NavButton
              key={title}
              isTop
              title={title}
              component={component}
              href={href}
            />
          ))}
      </Grid>
      <Grid container alignItems="center" sx={styles.innerBottomContainer}>
        {bottomSidebarButtons.map(({ title, component, href }) => (
          <NavButton
            key={title}
            title={title}
            component={component}
            href={href}
          />
        ))}
        {isXl && <NavMenu isMenuOpen={open} handleClick={handleClick} />}
      </Grid>
      <NavPopover open={open} anchorEl={anchorEl} onClose={handleClick}>
        {topSidebarButtons.map(({ title, component, href }) => (
          <NavButton
            key={title}
            isTop
            title={title}
            component={component}
            href={href}
          />
        ))}
      </NavPopover>
    </Grid>
  );
};

export { Sidebar };
export default withSidebar(Sidebar);
