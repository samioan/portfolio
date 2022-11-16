const styles = {
  iconButton: {
    p: 0,
    width: { md: "100%", xs: 28 },
    height: { md: 28, xs: "100%" },
  },
  bottomIconButton: {
    p: 0,
    width: { md: "100%", xs: 28 },
    height: { md: 28, xs: "100%" },
    color: "textColor.main",
    transition: "color .3s ease 0s",
    "&:hover": {
      color: "light.main",
    },
  },
};

export { styles };
export default styles;
