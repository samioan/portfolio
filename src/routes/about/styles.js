import { createUseStyles } from "react-jss";
import { fonts, colors } from "theme";

const styles = createUseStyles({
  aboutContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: 1280,
    padding: "0 16px",
    boxSizing: "border-box",
  },
  aboutTitle: {
    ...fonts.pageTitle,
    paddingTop: 100,
    color: colors.darkHeaderText,
  },
  divider: {
    height: 4,
    width: 100,
    backgroundColor: colors.darkHeaderText,
    margin: "12px 0 100px 0",
  },
  goalsSectionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginBottom: 64,
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
  },
  profileSectionContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: "90%",
    justifyContent: "center",
    paddingBottom: 100,
  },
  skillsContainer: {
    maxWidth: "50%",
    minWidth: 248,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 16,
    marginBottom: 32,
  },
});

export { styles };
export default styles;
