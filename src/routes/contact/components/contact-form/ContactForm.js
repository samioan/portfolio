import React from "react";

import withContactFormProps from "./withContactFormProps";

import styles from "./styles";

const ContactForm = ({
  handleOnSubmit,
  handleOnChange,
  inputs,
  status,
  label,
}) => {
  const classes = styles();

  return (
    <form onSubmit={handleOnSubmit} className={classes.form}>
      <input
        type="text"
        id="name"
        placeholder="Name"
        value={inputs.name}
        onChange={handleOnChange}
        required
        className={classes.input}
      />
      <input
        type="email"
        id="email"
        placeholder="Email"
        value={inputs.email}
        onChange={handleOnChange}
        required
        className={classes.input}
      />

      <div>
        <textarea
          id="message"
          placeholder="Message"
          value={inputs.message}
          onChange={handleOnChange}
          required
          className={`${classes.input} ${classes.message}`}
        />
      </div>
      <button
        type="submit"
        className={classes.submitButton}
        disabled={status.submitting}
      >
        <p className={classes.submitButtonText}>{label}</p>
      </button>
    </form>
  );
};

export { ContactForm };
export default withContactFormProps(ContactForm);
