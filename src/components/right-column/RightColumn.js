import Grid from "@mui/material/Grid";

import styles from "./styles";

const RightColumn = ({ image }) => (
  <Grid
    sx={{
      backgroundImage: `url(${image})`,
      ...styles.imageContainer,
    }}
  ></Grid>
);

export { RightColumn };
export default RightColumn;
