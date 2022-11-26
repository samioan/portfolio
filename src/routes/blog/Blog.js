import { useEffect } from "react";

import {
  Title,
  RightColumn,
  LeftColumn,
  PageContainer,
  Subtitle,
} from "components";
import { bg } from "images";

import styles from "./styles";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog";
  }, []);

  return (
    <PageContainer>
      <LeftColumn>
        <Title label="BLOG" />
        <Subtitle label="Coming soon!" customStyles={styles.subtitle} />
      </LeftColumn>

      <RightColumn image={bg} />
    </PageContainer>
  );
};

export { Blog };
export default Blog;
