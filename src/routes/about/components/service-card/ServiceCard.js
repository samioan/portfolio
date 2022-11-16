import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { CardContainer } from "components";

import styles from "./styles";
import classes from "./ServiceCard.module.css";

const ServiceCard = ({ icon, title, description }) => (
  <Grid sx={styles.cardContainer}>
    <CardContainer customStyles={styles.card}>
      <img src={icon} alt={title} className={classes.icon} />
      <Typography color="light.main" sx={styles.title}>
        {title}
      </Typography>
      <Typography color="textColor.main" sx={styles.text}>
        {description}
      </Typography>
    </CardContainer>
  </Grid>
);

export { ServiceCard };
export default ServiceCard;
