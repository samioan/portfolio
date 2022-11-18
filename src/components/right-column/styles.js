const styles = {
  imageContainer: {
    position: "relative",
    backgroundSize: "cover",
    width: { lg: "50%", md: "calc(100% / 3)", xs: "100%" },
    height: { md: "100vh", xs: "50vh" },
    top: 0,
    backgroundPosition: "center",
    "&:before": {
      content: "''",
      position: "absolute",
      right: 0,
      top: 0,
      width: "100%",
      height: { md: "100%", xs: "50vh" },
      background: "#181818",
      opacity: 0.15,
    },
  },
};

export default styles;
