import {
  Title,
  RightColumn,
  LeftColumn,
  PageContainer,
  Subtitle,
} from "components";

import styles from "./styles";

const Blog = () => (
  <PageContainer>
    <LeftColumn>
      <Title label="BLOG" />
      <Subtitle label="Coming soon!" customStyles={styles.subtitle} />
    </LeftColumn>

    <RightColumn image="https://www.bestmenswear.com/images/Suits/1Suit.jpg" />
  </PageContainer>
);

export { Blog };
export default Blog;
