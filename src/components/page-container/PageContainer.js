import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import styles from "./styles";

const PageContainer = ({ children }) => {
  const theme = useTheme();
  const isXl = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid>
      {isXl ? (
        <Grid sx={styles.topContainer}>
          <Grid container sx={styles.pageContainer}>
            {children}
          </Grid>
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
