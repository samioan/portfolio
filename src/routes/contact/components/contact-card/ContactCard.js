import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { CardContainer } from "components";

import classes from "./ContactCard.module.css";
import styles from "./styles";

const ContactCard = ({ icon, title, subtitle }) => (
  <Grid sx={styles.cardContainer}>
    <CardContainer customStyles={styles.card}>
      <Grid container alignItems="flex-start" wrap="nowrap">
        <img src={icon} alt={title} className={classes.icon} />
        <Grid sx={styles.textContainer}>
          <Typography color="light.main" sx={styles.title}>
            {title}
          </Typography>
          <Typography color="textColor.main" sx={styles.subtitle}>
            {subtitle}
          </Typography>
        </Grid>
      </Grid>
    </CardContainer>
  </Grid>
);

export { ContactCard };
export default ContactCard;
