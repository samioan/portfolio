import { createUseStyles } from "react-jss";

import { colors, fonts } from "theme";

const styles = createUseStyles({
  scrollButton: {
    position: "fixed",
    height: 64,
    width: 64,
    border: "none",
    borderRadius: 100,
    margin: "0 32px 16px 0",
    backgroundColor: colors.backgroundLight,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    cursor: "pointer",
    bottom: 0,
    right: 0,
    transition: "0.5s",
    "&:hover": {
      backgroundColor: colors.highlight,
    },
    "& img": {
      filter:
        "invert(100%) sepia(0%) saturate(0%) hue-rotate(201deg) brightness(105%) contrast(105%)",
      height: 32,
      width: 32,
    },
  },
  mobileScrollButton: {
    position: "fixed",
    width: "100vw",
    border: "none",
    backgroundColor: colors.backgroundLight,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    cursor: "pointer",
    bottom: 0,
    borderRadius: "10px 10px 0 0",
    padding: "4px 0",
    transition: "0.5s",
  },
  scrollButtonText: {
    ...fonts.buttonText,
    color: colors.white,
  },
});

export { styles };
export default styles;
