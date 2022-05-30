import breakpoints from "./breakpoints";

const FONT = "JetBrains Mono, monospace";

const fonts = {
  headerText: {
    fontFamily: FONT,
    fontSize: 48,
    fontWeight: "normal",
    textAlign: "center",
    [breakpoints.sm]: {
      fontSize: 32,
    },
  },
  buttonText: {
    fontFamily: FONT,
    fontSize: 20,
    fontWeight: "normal",
    [breakpoints.sm]: {
      fontSize: 16,
    },
  },
  pageTitle: {
    fontFamily: FONT,
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
    [breakpoints.sm]: {
      fontSize: 32,
    },
  },
  itemHeaderText: {
    fontFamily: FONT,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    [breakpoints.sm]: {
      fontSize: 24,
    },
  },
  itemContentText: {
    fontFamily: FONT,
    fontSize: 16,
    fontWeight: "normal",
    textAlign: "center",
    [breakpoints.sm]: {
      fontSize: 12,
    },
  },
};

export { fonts };
export default fonts;
