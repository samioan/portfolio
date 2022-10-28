import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import styles from "./styles";

const ServiceCard = ({ icon, title, text }) => (
  <Grid sx={styles.cardContainer}>
    <Grid sx={styles.card}>
      {icon}
      <Typography color="white.main" sx={styles.title}>
        {title}
      </Typography>
      <Typography color="text.secondary" sx={styles.text}>
        {text}
      </Typography>
    </Grid>
  </Grid>
);

export { ServiceCard };
export default ServiceCard;
