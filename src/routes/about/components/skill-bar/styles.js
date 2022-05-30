import { createUseStyles } from "react-jss";
import { fonts, colors } from "theme";

const styles = createUseStyles({
  skillbarContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
    justifyContent: "space-between",
    height: 32,
    borderRadius: 10,
    backgroundColor: colors.textSecondary,
  },
  innerSkillContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
  skillText: {
    ...fonts.itemContentText,
    padding: "0px 8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.backgroundLight,
    color: colors.white,
    width: 120,
    height: "100%",
    borderRadius: "10px 0 0 10px",
  },
  skillBar: {
    backgroundColor: colors.borders,
    height: "100%",
    borderRadius: "0 10px 10px 0",
  },
  skillBarRemaining: {
    backgroundColor: "transparent",
    height: "100%",
  },
  skillPercent: {
    ...fonts.itemContentText,
    padding: "0px 8px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    backgroundColor: colors.backgroundLight,
    color: colors.white,
    borderRadius: "0 10px 10px 0",
  },
});

export { styles };
export default styles;
