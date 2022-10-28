const styles = {
  container: {
    position: "fixed",
    bottom: 0,
    left: 0,
    pb: 2,
    width: 44,
    justifyContent: "space-between",
    height: "100%",
    bgcolor: "#181818",
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-1px",
      top: 0,
      width: "1px",
      height: "100%",
      background: "rgba(255,255,255,0.05)",
    },
  },
  innerContainer: {
    gap: "16px",
  },
  logoContainer: {
    bgcolor: "text.primary",
    height: 58,
    width: "100%",
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
  iconButton: {
    p: 0,
    width: "100%",
    height: 28,
  },
  bottomIconButton: {
    p: 0,
    width: "100%",
    height: 28,
    color: "text.secondary",
    transition: "all .3s ease 0s",
    "&:hover": {
      color: "white.main",
    },
  },
  icon: {
    width: 21,
    height: 21,
  },
};

export { styles };
export default styles;
