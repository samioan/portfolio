import Grid from "@mui/material/Grid";

import styles from "./styles";

const InnerContainer = ({ children }) => (
  <Grid sx={styles.innerContainer}>{children}</Grid>
);

export { InnerContainer };
export default InnerContainer;
