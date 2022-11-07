const styles = {
  logoContainer: {
    bgcolor: "text.primary",
    height: 58,
    width: { xl: "100%", xs: 58 },
    "&:before": {
      content: "''",
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(135deg,rgba(0,0,0,.3) 0,rgba(0,0,0,0) 100%)",
    },
  },
  logo: {
    p: 0,
    width: "100%",
    height: "100%",
  },
};

export { styles };
export default styles;
