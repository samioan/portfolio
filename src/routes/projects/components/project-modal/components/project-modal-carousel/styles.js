import { createUseStyles } from "react-jss";
import { colors, breakpoints } from "theme";

const styles = createUseStyles({
  carouselContainer: {
    height: 450,
    marginBottom: 16,
    position: "relative",
    [breakpoints.sm]: {
      height: 300,
    },
  },
  imageContainer: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 16,
  },
  hiddenImage: {
    display: "none",
  },
  button: {
    cursor: "pointer",
    position: "absolute",
    top: "calc(100% - 64px)",
    height: 64,
    padding: "0 32px",
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
    transition: "0.5s",
    backgroundColor: "rgba(0,0,0,0.4)",
    border: "none",
    borderRadius: 16,
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.6)",
    },
  },
  nextButton: {
    right: 0,
  },
});

export { styles };
export default styles;
