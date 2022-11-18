import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { CardContainer } from "components";

import withContactForm from "./withContactForm";
import styles from "./styles";

const ContactForm = ({
  handleOnSubmit,
  handleOnChange,
  inputs,
  status,
  label,
  setStatus,
}) => (
  <Grid sx={styles.cardContainer}>
    <CardContainer customStyles={styles.card}>
      <form onSubmit={handleOnSubmit}>
        <Grid container justifyContent="space-between">
          <Grid sx={styles.rightTextFieldContainer}>
            <TextField
              id="name"
              type="text"
              label="Full Name"
              variant="filled"
              sx={styles.textField}
              value={inputs.name}
              onChange={handleOnChange}
              required
            />
          </Grid>
          <Grid sx={styles.leftTextFieldContainer}>
            <TextField
              id="email"
              type="email"
              label="Email Address"
              variant="filled"
              sx={styles.textField}
              value={inputs.email}
              onChange={handleOnChange}
              required
            />
          </Grid>
        </Grid>
        <Grid sx={styles.bottomTextFieldContainer}>
          <TextField
            id="message"
            type="text"
            label="Your Message"
            variant="filled"
            fullWidth
            sx={styles.textField}
            value={inputs.message}
            onChange={handleOnChange}
            required
          />
        </Grid>
        <Button
          disableRipple
          endIcon={<ArrowForwardIcon />}
          sx={styles.button}
          type="submit"
          disabled={status.submitting}
        >
          {label}
        </Button>
      </form>
    </CardContainer>
  </Grid>
);

export { ContactForm };
export default withContactForm(ContactForm);
