import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Scrollbars } from "components";

import styles from "./styles";

const PageContainer = ({ children }) => {
  const theme = useTheme();
  const isXl = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <Grid>
      {isXl ? (
        <Grid sx={styles.topContainer}>
          <Scrollbars>
            <Grid container sx={styles.pageContainer}>
              {children}
            </Grid>
          </Scrollbars>
        </Grid>
      ) : (
        <Grid container sx={styles.pageContainer}>
          {children}
        </Grid>
      )}
    </Grid>
  );
};

export { PageContainer };
export default PageContainer;
