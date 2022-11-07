import { Scrollbars as CustomScrollbars } from "react-custom-scrollbars-2";

import classes from "./Scrollbars.module.css";

const Scrollbars = ({ children, isForColumn }) => (
  <CustomScrollbars
    autoHide
    autoHeight
    autoHeightMin={isForColumn ? "100vh" : "calc(100vh - 58px)"}
    renderThumbVertical={(props) => (
      <div {...props} className={classes.thumb} />
    )}
  >
    {children}
  </CustomScrollbars>
);

export { Scrollbars };
export default Scrollbars;
