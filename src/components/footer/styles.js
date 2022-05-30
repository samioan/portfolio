import { createUseStyles } from "react-jss";
import { fonts, colors } from "theme";

const styles = createUseStyles({
  footerContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "48px 0",
    width: "100%",
    boxSizing: "border-box",
    maxWidth: 1280,
    flexDirection: "column",
  },
  footerButtonContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 32,
  },
  footerBottomText: {
    ...fonts.itemContentText,
    color: colors.darkContentText,
  },
});

export { styles };
export default styles;
