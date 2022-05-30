import { createUseStyles } from "react-jss";
import { fonts } from "theme";

const styles = createUseStyles({
  projectsContainer: {
    display: "flex",
    maxWidth: 1280,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "0 16px",
    boxSizing: "border-box",
  },
  projectsTitle: {
    ...fonts.pageTitle,
    margin: "32px 0px 64px 0px",
  },
  projectsSectionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    paddingBottom: 132,
  },
});

export { styles };
export default styles;
