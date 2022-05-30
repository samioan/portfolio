import React from "react";

import { PageTitle } from "components";
import { ContactForm } from "./components";

import styles from "./styles";

const Contact = () => {
  const classes = styles();
  return (
    <div className={classes.contactsContainer}>
      <PageTitle title="CONTACT" />
      <ContactForm />
    </div>
  );
};

export { Contact };
export default Contact;
