import { createUseStyles } from "react-jss";
import { colors, images } from "theme";

const styles = createUseStyles({
  pageContainer: {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
  },
  header: {
    backgroundColor: colors.backgroundLight,
    borderBottom: `3px solid ${colors.borders}`,
    position: "fixed",
    width: "100vw",
    zIndex: 1,
  },
  homePage: {
    backgroundColor: colors.backgroundLight,
    background: `url(${images.pageBackground}) no-repeat fixed center`,
    backgroundSize: "cover",
  },
  aboutPage: {
    backgroundColor: colors.lightBackground,
  },
  projectsPage: {
    backgroundColor: colors.textSecondary,
  },
  contactPage: {
    backgroundColor: colors.backgroundLight,
    background: `url(${images.pageBackground}) no-repeat fixed center`,
    backgroundSize: "cover",
  },
  footer: {
    backgroundColor: colors.backgroundDark,
  },
});

export { styles };
export default styles;
