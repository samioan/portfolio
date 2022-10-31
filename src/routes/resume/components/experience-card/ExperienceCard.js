import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import styles from "./styles";
import classes from "./ExperienceCard.module.css";

const ExperienceCard = ({ experienceItems }) => (
  <Grid sx={styles.cardContainer}>
    {experienceItems.map((item) => (
      <div key={item.title}>
        <Grid sx={styles.card}>
          <Typography color="white.main" sx={styles.title}>
            {item.title}
          </Typography>
          <Typography sx={styles.dateCompany}>
            {item.date} <span className={classes.textDivider}>|</span>{" "}
            {item.company}
          </Typography>
          <Typography sx={styles.description}>{item.description}</Typography>
        </Grid>
        {experienceItems.indexOf(item) < experienceItems.length - 1 && (
          <Divider sx={styles.divider} />
        )}
      </div>
    ))}
  </Grid>
);

export { ExperienceCard };
export default ExperienceCard;
