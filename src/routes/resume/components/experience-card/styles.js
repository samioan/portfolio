const styles = {
  cardContainer: {
    ml: "28px",
    mr: "28px",
    py: "30px",
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
    mb: "5px",
    fontSize: "16px",
    fontWeight: 700,
  },
  dateCompany: {
    mb: "15px",
    padding: 0,
    fontSize: "12px",
    lineHeight: "12px",
    color: "#777",
  },
  description: {
    fontSize: "15px",
    lineHeight: 1.7,
    color: "#a9a9a9",
  },
  divider: {
    my: "30px",
    bgcolor: "rgba(255,255,255,.1)",
  },
};

export default styles;
