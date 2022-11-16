import Grid from "@mui/material/Grid";

import {
  Title,
  RightColumn,
  LeftColumn,
  PageContainer,
  Subtitle,
} from "components";
import { contact } from "reference-data";

import styles from "./styles";
import { ContactCard, ContactForm } from "./components";

const Contact = () => (
  <PageContainer>
    <LeftColumn>
      <Title label="CONTACT" />
      <Subtitle label="Contact Details" customStyles={styles.detailsSubtitle} />
      <Grid container justifyContent="space-between" wrap="wrap">
        {contact.map(({ icon, title, subtitle }) => (
          <ContactCard
            key={title}
            icon={icon}
            title={title}
            subtitle={subtitle}
          />
        ))}
      </Grid>
      <Subtitle label="Contact Form" customStyles={styles.formSubtitle} />
      <ContactForm />
    </LeftColumn>

    <RightColumn image="https://www.bestmenswear.com/images/Suits/1Suit.jpg" />
  </PageContainer>
);

export { Contact };
export default Contact;
