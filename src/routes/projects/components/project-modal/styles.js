import { createUseStyles } from "react-jss";
import { colors, fonts, breakpoints } from "theme";

const styles = createUseStyles({
  modalWindow: {
    position: "fixed",
    zIndex: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalContainer: {
    padding: "8px 16px 16px",
    width: 700,
    backgroundColor: colors.lightBackground,
    borderRadius: 4,
    [breakpoints.sm]: {
      height: "-webkit-fill-available",
    },
  },
  modalHeaderContainer: {
    marginBottom: 16,
  },
  modalHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  modalTitle: {
    ...fonts.itemHeaderText,
    color: colors.darkHeaderText,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: colors.textSecondary,
    marginBottom: 16,
  },
  modalTagline: {
    ...fonts.itemContentText,
    color: colors.darkContentText,
    textAlign: "left",
  },
  modalCloseButton: {
    border: "none",
    backgroundColor: "transparent",
    borderRadius: 200,
    width: 48,
    height: 48,
    padding: 12,
    cursor: "pointer",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  modalContent: {
    marginBottom: 16,
  },
  modalDescription: {
    ...fonts.itemContentText,
    textAlign: "left",
  },
  modalButtonsContainer: {
    display: "flex",
  },
  modalButton: {
    padding: "8px 16px",
    border: "none",
    backgroundColor: colors.highlight,
    color: colors.white,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    borderRadius: 8,
    transition: "0.5s",
    "&:hover": {
      backgroundColor: "transparent",
      color: colors.darkHeaderText,
    },
  },
  modalButtonText: {
    ...fonts.itemContentText,
  },
});

export { styles };
export default styles;
