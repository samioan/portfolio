import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Scrollbars } from "components";

import styles from "./styles";

const LeftColumn = ({ children }) => {
  const theme = useTheme();
  const isXl = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isXl ? (
        <Grid sx={styles.leftColumnContainer}>{children}</Grid>
      ) : (
        <Grid sx={styles.leftColumnContainer}>
          <Scrollbars isForColumn>{children}</Scrollbars>
        </Grid>
      )}
    </>
  );
};

export { LeftColumn };
export default LeftColumn;
