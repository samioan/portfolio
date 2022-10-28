import Grid from "@mui/material/Grid";

import styles from "./styles";

const PageContainer = ({ children }) => (
  <Grid container sx={styles.pageContainer}>
    {children}
  </Grid>
);

export { PageContainer };
export default PageContainer;
