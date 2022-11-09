import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { CardContainer } from "components";

import styles from "./styles";
import classes from "./ServiceCard.module.css";

const ServiceCard = ({ icon, title, text }) => (
  <Grid sx={styles.cardContainer}>
    <CardContainer customStyles={styles.card}>
      <img src={icon} alt={title} className={classes.icon} />
      <Typography color="white.main" sx={styles.title}>
        {title}
      </Typography>
      <Typography color="text.secondary" sx={styles.text}>
        {text}
      </Typography>
    </CardContainer>
  </Grid>
);

export { ServiceCard };
export default ServiceCard;
