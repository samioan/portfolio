const styles = {
  cardContainer: {
    ml: "28px",
    mr: "28px",
    py: "20px",
    background: "rgba(255,255,255,.05)",
    boxShadow: "0 0 50px rgb(0 0 0 / 20%)",
    borderRadius: "18px",
    transition: "all .3s ease 0s",
    "&:hover": {
      boxShadow: "0 15px 55px rgb(0 0 0 / 30%)",
    },
  },
  card: {
    px: "30px",
  },
  title: {
    margin: "0 0 10px 0",
    fontSize: "14px",
    lineHeight: "14px",
    color: "#fff",
    fontWeight: 700,
  },
  divider: {
    my: "20px",
    bgcolor: "rgba(255,255,255,.1)",
  },
};

export default styles;
