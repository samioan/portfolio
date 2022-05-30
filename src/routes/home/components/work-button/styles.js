import { createUseStyles } from "react-jss";
import { fonts, colors } from "theme";

const styles = createUseStyles({
  button: {
    padding: 16,
    border: `solid ${colors.borders}`,
    backgroundColor: "transparent",
    cursor: "pointer",
    borderRadius: 8,
    marginTop: 32,
    marginBottom: 32,
    transition: "0.5s",
    "&:hover": {
      backgroundColor: colors.borders,
    },
  },
  buttonText: {
    ...fonts.buttonText,
    color: colors.white,
  },
});

export { styles };
export default styles;
