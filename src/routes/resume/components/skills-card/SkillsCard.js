import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import styles from "./styles";
import classes from "./SkillsCard.module.css";

const SkillsCard = ({ skillItems }) => (
  <Grid sx={styles.cardContainer}>
    {skillItems.map((item) => (
      <div key={item.title}>
        <Grid sx={styles.card}>
          <Typography color="white.main" sx={styles.title}>
            {item.title}
          </Typography>
          <div className={classes.barBackground}>
            <div
              className={classes.bar}
              style={{ width: `${item.percentage}%` }}
            />
          </div>
        </Grid>
        {skillItems.indexOf(item) < skillItems.length - 1 && (
          <Divider sx={styles.divider} />
        )}
      </div>
    ))}
  </Grid>
);

export { SkillsCard };
export default SkillsCard;
