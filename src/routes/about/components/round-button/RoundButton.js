import IconButton from "@mui/material/IconButton";

import styles from "./styles";

const RoundButton = ({ href, icon }) => (
  <IconButton
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    sx={styles.button}
  >
    {icon}
  </IconButton>
);

export { RoundButton };
export default RoundButton;
