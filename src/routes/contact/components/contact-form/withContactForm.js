import React, { useState } from "react";
import axios from "axios";

const withContactForm = (Component) => (props) => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    axios({
      method: "POST",
      url: "https://formspree.io/f/xlezzvqy",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  const label = (() => {
    if (!status.submitting && !status.submitted) return "Send Message";
    if (status.submitting) return "Sending...";
    if (status.submitted) return "Sent!";
  })();

  const newProps = {
    ...props,
    handleOnSubmit,
    handleOnChange,
    inputs,
    status,
    label,
    setStatus,
  };

  return <Component {...newProps} />;
};

export { withContactForm };
export default withContactForm;
