import { createUseStyles } from "react-jss";
import { colors } from "theme";

const styles = createUseStyles({
  footerButton: {
    margin: "0 24px",
    border: "none",
    backgroundColor: colors.backgroundLight,
    cursor: "pointer",
    borderRadius: 4,
    width: 50,
    height: 50,
    padding: 8,
  },
  footerIcon: {
    width: "100%",
    height: "100%",
  },
});

export { styles };
export default styles;
