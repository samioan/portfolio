import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

import styles from "./styles";

const CvButton = () => (
  <Button variant="contained" startIcon={<DownloadIcon />} sx={styles.button}>
    Download CV
  </Button>
);

export { CvButton };
export default CvButton;
