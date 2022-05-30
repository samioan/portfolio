import React, { useRef, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

import { colors } from "theme";

const withScrollbars = (Component) => (props) => {
  const scrollbarsRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [showScrollButton, setShowScrollButton] = useState(false);

  const onScroll = () => {
    if (scrollbarsRef.current.viewScrollTop > 200) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToHome = () =>
    scrollbarsRef.current.view.scroll({
      top: homeRef?.current?.offsetTop,
      behavior: "smooth",
    });

  const scrollToAbout = () =>
    scrollbarsRef.current.view.scroll({
      top: aboutRef?.current?.offsetTop,
      behavior: "smooth",
    });

  const scrollToProjects = () =>
    scrollbarsRef.current.view.scroll({
      top: projectsRef?.current?.offsetTop,
      behavior: "smooth",
    });

  const scrollToContact = () =>
    scrollbarsRef.current.view.scroll({
      top: contactRef?.current?.offsetTop,
      behavior: "smooth",
    });

  const newProps = {
    ...props,
    showScrollButton,
    scrollbarsRef,
    homeRef,
    aboutRef,
    projectsRef,
    contactRef,
    scrollToHome,
    scrollToAbout,
    scrollToProjects,
    scrollToContact,
  };

  return (
    <Scrollbars
      autoHeight
      autoHeightMin={"100vh"}
      ref={scrollbarsRef}
      onScroll={onScroll}
      renderTrackVertical={(props) => (
        <div
          {...props}
          style={{
            width: 4,
            position: "absolute",
            right: 0,
            bottom: 0,
            top: 0,
            zIndex: 2,
          }}
        />
      )}
      renderThumbVertical={(props) => (
        <div
          {...props}
          style={{
            borderRadius: 3,
            background: colors.borders,
          }}
        />
      )}
    >
      <Component {...newProps} />
    </Scrollbars>
  );
};

export { withScrollbars };
export default withScrollbars;
