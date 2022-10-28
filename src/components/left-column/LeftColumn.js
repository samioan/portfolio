import Grid from "@mui/material/Grid";

import { Scrollbars } from "react-custom-scrollbars-2";

import styles from "./styles";

const LeftColumn = ({ children }) => (
  <Grid item xs={6} sx={styles.leftColumnContainer}>
    <Scrollbars autoHide autoHeight autoHeightMin={"100vh"}>
      {children}
    </Scrollbars>
  </Grid>
);

export { LeftColumn };
export default LeftColumn;
