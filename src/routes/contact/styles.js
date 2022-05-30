import { createUseStyles } from "react-jss";
import { fonts } from "theme";

const styles = createUseStyles({
  contactsContainer: {
    display: "flex",
    maxWidth: 1280,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "0 16px",
    boxSizing: "border-box",
  },
  contactsTitle: {
    ...fonts.pageTitle,
    margin: "32px 0px 64px 0px",
  },
});

export { styles };
export default styles;
