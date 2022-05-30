import { createUseStyles } from "react-jss";
import { fonts, colors } from "theme";

const styles = createUseStyles({
  goalItemContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 8,
    width: "25%",
    maxWidth: "calc(25% - 34px)",
    minWidth: 100,
  },
  goalImage: {
    width: 100,
    height: 100,
    backgroundColor: "lightgray",
    borderRadius: 20,
  },
  goalHeader: {
    ...fonts.itemHeaderText,
    color: colors.darkHeaderText,
    margin: "16px 0px 8px 0px",
  },
  goalText: {
    ...fonts.itemContentText,
    color: colors.darkContentText,
    margin: "0 0 8px 0",
  },
});

export { styles };
export default styles;
