import Grid from "@mui/material/Grid";

import styles from "./styles";

const CardContainer = ({ children, customStyles }) => (
  <Grid sx={{ ...styles.cardContainer, ...customStyles }}>{children}</Grid>
);

export { CardContainer };
export default CardContainer;
