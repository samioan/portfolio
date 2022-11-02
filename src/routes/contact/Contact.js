import Grid from "@mui/material/Grid";
import CodeIcon from "@mui/icons-material/Code";

import {
  Title,
  RightColumn,
  LeftColumn,
  PageContainer,
  Subtitle,
} from "components";

import styles from "./styles";
import { ContactCard, ContactForm } from "./components";

const Contact = () => (
  <PageContainer>
    <LeftColumn>
      <Title label="CONTACT" />
      <Subtitle label="Contact Details" customStyles={styles.detailsSubtitle} />
      <Grid container justifyContent="space-between" wrap="wrap">
        <ContactCard
          icon={<CodeIcon />}
          title="Address"
          subtitle="Athens, Greece"
        />
        <ContactCard
          icon={<CodeIcon />}
          title="Address"
          subtitle="Athens, Greece"
        />
        <ContactCard
          icon={<CodeIcon />}
          title="Address"
          subtitle="Athens, Greece"
        />
        <ContactCard
          icon={<CodeIcon />}
          title="Address"
          subtitle="Athens, Greece"
        />
      </Grid>
      <Subtitle label="Contact Form" customStyles={styles.formSubtitle} />
      <ContactForm />
    </LeftColumn>

    <RightColumn image="https://www.bestmenswear.com/images/Suits/1Suit.jpg" />
  </PageContainer>
);

export { Contact };
export default Contact;
