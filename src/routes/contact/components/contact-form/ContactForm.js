import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { CardContainer } from "components";

import styles from "./styles";

const ContactForm = () => (
  <Grid sx={styles.cardContainer}>
    <CardContainer customStyles={styles.card}>
      <Grid container justifyContent="space-between">
        <Grid sx={styles.rightTextFieldContainer}>
          <TextField label="Full Name" variant="filled" sx={styles.textField} />
        </Grid>
        <Grid sx={styles.leftTextFieldContainer}>
          <TextField
            label="Email Address"
            variant="filled"
            sx={styles.textField}
          />
        </Grid>
      </Grid>
      <Grid sx={styles.bottomTextFieldContainer}>
        <TextField
          label="Your Message"
          variant="filled"
          fullWidth
          sx={styles.textField}
        />
      </Grid>
      <Button disableRipple endIcon={<ArrowForwardIcon />} sx={styles.button}>
        Send Message
      </Button>
    </CardContainer>
  </Grid>
);

export { ContactForm };
export default ContactForm;
