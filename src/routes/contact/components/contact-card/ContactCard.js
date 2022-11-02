import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { CardContainer } from "components";

import styles from "./styles";

const ContactCard = ({ icon, title, subtitle }) => (
  <Grid sx={styles.cardContainer}>
    <CardContainer customStyles={styles.card}>
      <Grid container alignItems="center">
        {icon}
        <Grid sx={styles.textContainer}>
          <Typography color="white.main" sx={styles.title}>
            {title}
          </Typography>
          <Typography color="text.secondary" sx={styles.subtitle}>
            {subtitle}
          </Typography>
        </Grid>
      </Grid>
    </CardContainer>
  </Grid>
);

export { ContactCard };
export default ContactCard;
