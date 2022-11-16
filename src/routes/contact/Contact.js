import Grid from "@mui/material/Grid";

import {
  Title,
  RightColumn,
  LeftColumn,
  PageContainer,
  Subtitle,
} from "components";
import { contact } from "reference-data";
import { bg } from "images";

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

    <RightColumn image={bg} />
  </PageContainer>
);

export { Contact };
export default Contact;
