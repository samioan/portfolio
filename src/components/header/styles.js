import { createUseStyles } from "react-jss";

import { breakpoints } from "theme";

const styles = createUseStyles({
  headerContainer: {
    display: "flex",
    padding: 8,
    width: "100%",
    boxSizing: "border-box",
    maxWidth: 1280,
    [breakpoints.sm]: {
      justifyContent: "center",
    },
  },
});

export { styles };
export default styles;
