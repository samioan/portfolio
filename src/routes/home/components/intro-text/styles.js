import { createUseStyles } from "react-jss";
import { fonts, colors } from "theme";

const styles = createUseStyles({
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  topText: {
    ...fonts.headerText,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  bottomText: {
    ...fonts.headerText,
    color: colors.textSecondary,
  },
});

export { styles };
export default styles;
