import Typography from "@mui/material/Typography";

import styles from "./styles";
import classes from "./Subtitle.module.css";

const Subtitle = ({ label, customStyles }) => (
  <Typography color="light.main" sx={{ ...styles.subtitle, ...customStyles }}>
    <span className={classes.emphasis}>{label.split(" ")[0]}</span>
    {` ${label.split(" ")[1]}`}
  </Typography>
);

export { Subtitle };
export default Subtitle;
