import { createUseStyles } from "react-jss";
import { fonts, colors, breakpoints } from "theme";

const styles = createUseStyles({
  form: {
    minWidth: 300,
    maxWidth: 500,
    width: "100%",
    paddingBottom: 132,
    [breakpoints.sm]: {
      paddingBottom: 16,
    },
  },
  input: {
    ...fonts.itemContentText,
    textAlign: "left",
    width: "100%",
    backgroundColor: colors.backgroundDark,
    color: colors.textSecondary,
    border: "none",
    borderRadius: 8,
    padding: "10px 15px",
    marginBottom: 4,
    boxSizing: "border-box",
    "&:hover, &:active, &:focus, &:focus-visible": {
      border: "none",
      outline: "none",
    },
  },
  message: {
    height: 150,
  },
  submitButton: {
    position: "relative",
    float: "right",
    padding: "8px 16px",
    border: `solid ${colors.borders}`,
    backgroundColor: "transparent",
    cursor: "pointer",
    borderRadius: 8,
    transition: "0.5s",
    "&:hover": {
      backgroundColor: colors.borders,
    },
    "&:disabled": {
      backgroundColor: "transparent",
      cursor: "default",
    },
  },
  submitButtonText: {
    ...fonts.buttonText,
    fontSize: 16,
    color: colors.white,
    textTransform: "uppercase",
  },
});

export { styles };
export default styles;
