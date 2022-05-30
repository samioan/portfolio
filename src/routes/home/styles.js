import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  homeContainer: {
    width: "100%",
    maxWidth: 1280,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    marginTop: 16,
  },
});

export { styles };
export default styles;
