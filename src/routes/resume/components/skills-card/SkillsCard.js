import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import styles from "./styles";

import { CardContainer } from "components";

const SkillsCard = ({ skillItems }) => (
  <CardContainer customStyles={styles.cardContainer}>
    {skillItems.map((item) => (
      <div key={item.title}>
        <Grid sx={styles.card}>
          <Typography color="light.main" sx={styles.title}>
            {item.title}
          </Typography>
        </Grid>
        {skillItems.indexOf(item) < skillItems.length - 1 && (
          <Divider sx={styles.divider} />
        )}
      </div>
    ))}
  </CardContainer>
);

export { SkillsCard };
export default SkillsCard;
