import { createUseStyles } from "react-jss";
import { fonts, colors } from "theme";

const styles = createUseStyles({
  profileDetailsContainer: {
    maxWidth: "50%",
    minWidth: 248,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 32,
  },
  profilePic: {
    width: 250,
    height: 250,
    backgroundColor: "lightgray",
    borderRadius: 200,
  },
  profileHeader: {
    ...fonts.itemHeaderText,
    color: colors.darkHeaderText,
    margin: "16px 0px 8px 0px",
  },
  profileText: {
    ...fonts.itemContentText,
    color: colors.darkContentText,
    margin: "0 0 8px 0",
    maxWidth: "50%",
  },
});

export { styles };
export default styles;
