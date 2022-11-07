const styles = {
  imageContainer: {
    position: "relative",
    backgroundSize: "cover",
    width: { xl: "50%", xs: "100%" },
    height: { xl: "100vh", xs: "50vh" },
    top: 0,
    "&:before": {
      content: "''",
      position: "absolute",
      right: 0,
      top: 0,
      width: "100%",
      height: { xl: "100%", xs: "50vh" },
      background: "#181818",
      opacity: 0.15,
    },
  },
};

export default styles;
