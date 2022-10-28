const styles = {
  button: {
    width: 44,
    height: 44,
    bgcolor: "rgba(255,255,255,.05)",
    borderRadius: 8,
    transition: "0.5s",
    boxShadow: "0 0 25px rgb(0 0 0 / 20%)",
    color: "white.main",
    "&:hover": {
      bgcolor: "rgba(255,255,255,.05)",
      color: "text.primary",
      boxShadow: "0 5px 35px rgb(0 0 0 / 20%)",
    },
  },
};

export default styles;
