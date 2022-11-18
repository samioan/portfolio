import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import {
  Title,
  RightColumn,
  LeftColumn,
  Subtitle,
  PageContainer,
} from "components";
import { services } from "reference-data";
import { bg } from "images";

import styles from "./styles";
import { CvButton, RoundButton, ServiceCard, BioText } from "./components";

const About = () => (
  <PageContainer>
    <LeftColumn>
      <Title label="ABOUT ME" />
      <Grid sx={styles.bioContainer}>
        <BioText />
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={styles.buttonsContainer}
        >
          <CvButton />
          <RoundButton
            href="https://github.com/samioan"
            icon={<GitHubIcon />}
          />
          <RoundButton
            href="https://www.linkedin.com/in/ioannis-siampalias/"
            icon={<LinkedInIcon />}
          />
        </Grid>
      </Grid>

      <Subtitle label="My Services" customStyles={styles.servicesSubtitle} />

      <Grid
        container
        justifyContent="space-between"
        wrap="wrap"
        sx={styles.bottomContainer}
      >
        {services?.map(({ icon, title, description }) => (
          <ServiceCard
            key={title}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </Grid>
    </LeftColumn>

    <RightColumn image={bg} />
  </PageContainer>
);

export { About };
export default About;
