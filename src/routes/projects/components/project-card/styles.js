import { createUseStyles } from "react-jss";
import { fonts, colors } from "theme";

const styles = createUseStyles({
  projectCardContainer: {
    display: "flex",
    width: 400,
    height: 310,
    flexGrow: 1,
    position: "relative",
    zIndex: 0,
  },
  projectImage: {
    width: "100%",
    maxHeight: "100%",
    objectFit: "cover",
    borderRadius: 16,
  },
  detailsContainer: {
    top: 0,
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(197,198,199,0.8)",
    borderRadius: 16,
    opacity: 0,
    transition: "0.5s",
    "&:hover": {
      opacity: 1,
    },
  },
  projectHeader: {
    ...fonts.itemHeaderText,
    color: colors.darkHeaderText,
    marginBottom: 8,
  },
  projectText: {
    ...fonts.itemContentText,
    color: colors.highlight,
  },
  projectButton: {
    padding: "8px 16px",
    border: `solid ${colors.highlight}`,
    backgroundColor: "transparent",
    color: colors.darkHeaderText,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    borderRadius: 8,
    transition: "0.5s",
    "&:hover": {
      backgroundColor: colors.highlight,
      color: colors.white,
    },
  },
  projectButtonText: {
    ...fonts.itemContentText,
  },
});

export { styles };
export default styles;
