const styles = {
  button: {
    width: 44,
    height: 44,
    bgcolor: "lightHalfOpacity.main",
    borderRadius: 8,
    transition: "0.5s",
    boxShadow: "0 0 25px rgb(0 0 0 / 20%)",
    color: "light.main",
    "&:hover": {
      bgcolor: "lightHalfOpacity.main",
      color: "highlight.main",
      boxShadow: "0 5px 35px rgb(0 0 0 / 20%)",
    },
  },
};

export default styles;
