const styles = {
  cardContainer: {
    p: "16px 28px",
    width: "50%",
  },
  card: {
    bgcolor: "rgba(255,255,255,.05)",
    boxShadow: "0 0 50px rgb(0 0 0 / 20%)",
    p: "30px",
    borderRadius: "18px",
    minHeight: "236px",
    transition: "all .3s ease 0s",
    "&:hover": {
      boxShadow: "0 15px 55px rgb(0 0 0 / 30%)",
    },
  },
  title: {
    my: "10px",
    fontSize: "16px",
    fontWeight: 700,
  },
  text: {
    fontSize: "15px",
    lineHeight: 1.7,
  },
};

export default styles;
