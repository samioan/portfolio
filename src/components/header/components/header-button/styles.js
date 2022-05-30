import { createUseStyles } from "react-jss";
import { colors, fonts } from "theme";

const styles = createUseStyles({
  headerButton: {
    padding: 8,
    margin: "0 24px",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    color: colors.white,
    transition: "0.5s",
    "&:hover": {
      color: colors.highlight,
    },
  },
  headerButtonText: {
    ...fonts.itemContentText,
    textTransform: "uppercase",
  },
  headerIconButton: {
    width: 32,
    height: 32,
    margin: "0 8px",
    padding: 4,
    border: "none",
    borderRadius: 200,
    backgroundColor: colors.backgroundLight,
    cursor: "pointer",
  },
  headerIcon: {
    width: "100%",
    height: "100%",
  },
});

export { styles };
export default styles;
