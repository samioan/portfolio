import { createUseStyles } from "react-jss";
import { fonts, colors, breakpoints } from "theme";

const styles = createUseStyles({
  title: {
    ...fonts.pageTitle,
    paddingTop: 100,
  },
  titleDark: {
    color: colors.darkHeaderText,
  },
  titleLight: {
    color: colors.textSecondary,
  },
  divider: {
    height: 4,
    width: 100,
    margin: "12px 0 100px 0",
    [breakpoints.sm]: {
      margin: "12px 0 50px 0",
    },
  },
  dividerDark: {
    backgroundColor: colors.darkHeaderText,
  },
  dividerLight: {
    backgroundColor: colors.textSecondary,
  },
});

export { styles };
export default styles;
