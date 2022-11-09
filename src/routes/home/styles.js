import { homeBg } from "./images";

const styles = {
  container: {
    background: `url(${homeBg})`,
    backgroundSize: "cover",
    height: "100vh",
    "&:before": {
      content: "''",
      position: "fixed",
      left: "0vw",
      right: "0vw",
      top: "0vw",
      bottom: "0vw",
      width: "auto",
      height: "auto",
      overflow: "hidden",
      opacity: 0.6,
      bgcolor: "#000",
    },
  },
  innerContainer: {
    zIndex: 1,
  },
  title: {
    fontWeight: 600,
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    letterSpacing: "-.035em",
    mb: 1,
    fontSize: { sm: "66px", xs: "46px" },
  },
  subtitle: {
    fontSize: { sm: "20px", xs: "18px" },
    mr: 1,
    textShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
};

export { styles };
export default styles;
