const styles = {
  container: {
    position: "fixed",
    bottom: { xl: 0, xs: "calc(100% - 58px)" },
    left: 0,
    pb: 2,
    width: { xl: 44, xs: "100%" },
    justifyContent: "space-between",
    flexDirection: { xl: "column", xs: "row" },
    height: { xl: "100%", xs: 58 },
    bgcolor: "#181818",
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-1px",
      top: 0,
      width: { xl: "1px", xs: 0 },
      height: { xl: "100%", xs: 0 },
      background: "rgba(255,255,255,0.05)",
    },
  },
  innerContainer: {
    gap: "16px",
    width: { xl: "100%", xs: "auto" },
  },
  innerBottomContainer: {
    gap: "16px",
    width: { xl: "100%", xs: "auto" },
  },
  icon: {
    width: 21,
    height: 21,
  },
};

export { styles };
export default styles;
