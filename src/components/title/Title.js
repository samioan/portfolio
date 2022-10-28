import Typography from "@mui/material/Typography";

import styles from "./styles";

const Title = ({ label }) => (
  <Typography align="center" color="white.main" sx={styles.title}>
    {label}
  </Typography>
);

export { Title };
export default Title;
