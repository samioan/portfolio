import { useState, useEffect } from "react";
import { sidebarLinks } from "reference-data";

function useMediaQueryCustom(query) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

const withSidebar = (Component) => (props) => {
  const isXl = useMediaQueryCustom("(max-width: 768px)");

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  useEffect(() => {
    setAnchorEl(null);
    setOpen(false);
  }, [isXl]);

  const topSidebarButtons = sidebarLinks.top;
  const bottomSidebarButtons = sidebarLinks.bottom;

  const newProps = {
    ...props,
    topSidebarButtons,
    bottomSidebarButtons,
    isXl,
    open,
    anchorEl,
    handleClick,
  };

  return <Component {...newProps} />;
};

export { withSidebar };
export default withSidebar;
