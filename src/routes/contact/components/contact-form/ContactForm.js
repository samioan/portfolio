import React from "react";

import withContactFormProps from "./withContactFormProps";

import styles from "./styles";

const ContactForm = ({ handleSubmit, status }) => {
  const classes = styles();

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <input
        type="text"
        id="name"
        placeholder="Name"
        required
        className={classes.input}
      />
      <input
        type="email"
        id="email"
        placeholder="Email"
        required
        className={classes.input}
      />

      <div>
        <textarea
          id="message"
          placeholder="Message"
          required
          className={`${classes.input} ${classes.message}`}
        />
      </div>
      <button
        type="submit"
        className={classes.submitButton}
        disabled={status === "Sending..."}
      >
        <p className={classes.submitButtonText}>{status}</p>
      </button>
    </form>
  );
};

export { ContactForm };
export default withContactFormProps(ContactForm);
