const styles = {
  cardContainer: {
    p: "16px 28px 46px 28px",
  },
  card: {
    p: "15px 30px",
  },
  rightTextFieldContainer: {
    py: "16px",
    width: { sm: "50%", xs: "100%" },
    pr: { sm: "28px", xs: 0 },
    height: "92px",
  },
  textField: {
    width: "100%",
    "& input": {
      pl: 0,
    },
    "& label": {
      left: "-12px",
    },
    "& div": {
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "transparent",
      },
      "&.Mui-focused": {
        backgroundColor: "transparent",
      },
    },
  },
  leftTextFieldContainer: {
    py: "16px",
    width: { sm: "50%", xs: "100%" },
    pl: { sm: "28px", xs: 0 },
    height: "92px",
  },
  bottomTextFieldContainer: {
    p: "24px 0 16px 0",
    width: "100%",
    height: "112px",
  },
  button: {
    height: "56px",
    textTransform: "capitalize",
    lineHeight: "56px",
    fontsize: "14px",
    bgcolor: "transparent",
    color: "white.main",
    p: 0,
    "&:hover": {
      bgcolor: "transparent",
    },
  },
};

export default styles;
