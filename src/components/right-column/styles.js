const styles = {
  imageContainer: {
    backgroundSize: "cover",
    width: "50%",
    "&:before": {
      content: "''",
      position: "absolute",
      right: 0,
      top: 0,
      width: "calc(50% - 22px)",
      height: "100%",
      background: "#181818",
      opacity: 0.15,
    },
  },
};

export default styles;
