import {
  Title,
  RightColumn,
  LeftColumn,
  PageContainer,
  Subtitle,
} from "components";
import { bg } from "images";

import styles from "./styles";

const Blog = () => (
  <PageContainer>
    <LeftColumn>
      <Title label="BLOG" />
      <Subtitle label="Coming soon!" customStyles={styles.subtitle} />
    </LeftColumn>

    <RightColumn image={bg} />
  </PageContainer>
);

export { Blog };
export default Blog;
