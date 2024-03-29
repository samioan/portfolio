const styles = {
  button: {
    px: "24px",
    py: 0,
    height: 44,
    color: "light.main",
    bgcolor: "lightHalfOpacity.main",
    borderRadius: 8,
    transition: "0.5s",
    boxShadow: "0 0 25px rgb(0 0 0 / 20%)",
    textTransform: "capitalize",
    fontSize: "14px",
    fontWeight: 700,
    width: { xs: "100%", sm: "auto" },
    "&:hover": {
      bgcolor: "lightHalfOpacity.main",
      color: "highlight.main",
      boxShadow: "0 5px 35px rgb(0 0 0 / 20%)",
    },
  },
};

export default styles;
