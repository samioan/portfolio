import Grid from "@mui/material/Grid";

import { CardContainer } from "components";

import styles from "./styles";

const ContactForm = () => (
  <Grid sx={styles.cardContainer}>
    <CardContainer customStyles={styles.card}>Contact Form</CardContainer>
  </Grid>
);

export { ContactForm };
export default ContactForm;
