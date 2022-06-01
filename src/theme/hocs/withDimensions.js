import React, { useState, useEffect } from "react";

const withDimensions = (Component) => (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const breakpoints = {
    xs: width <= 0,
    sm: width <= 600,
    md: width <= 900,
    lg: width <= 1200,
    xl: width <= 1536,
  };

  const newProps = {
    ...props,
    breakpoints,
  };

  return <Component {...newProps} />;
};

export { withDimensions };
export default withDimensions;
