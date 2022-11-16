import { useState, useEffect } from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { sidebarLinks } from "reference-data";

const withSidebar = (Component) => (props) => {
  const theme = useTheme();
  const isXl = useMediaQuery(theme.breakpoints.down("md"));

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
