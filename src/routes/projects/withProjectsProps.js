import React, { useState } from "react";

const withProjectsProps = (Component) => (props) => {
  const initialState = {
    title: null,
    tagline: null,
    description: null,
    details: null,
    splashImage: null,
    images: null,
    link: null,
  };

  const [modal, toggleModal] = useState({ ...initialState });

  const onModalOpen = (project) => toggleModal({ ...project });

  const onModalClose = () => toggleModal({ ...initialState });

  const newProps = {
    ...props,
    modal,
    onModalOpen,
    onModalClose,
  };

  return <Component {...newProps} />;
};

export { withProjectsProps };
export default withProjectsProps;
