import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

import styles from "./styles";
import classes from "./CvButton.module.css";

const CvButton = () => (
  <Link
    to="/files/Ioannis Siampalias CV.pdf"
    target="_blank"
    download
    className={classes.link}
  >
    <Button variant="contained" startIcon={<DownloadIcon />} sx={styles.button}>
      Download CV
    </Button>
  </Link>
);

export { CvButton };
export default CvButton;
