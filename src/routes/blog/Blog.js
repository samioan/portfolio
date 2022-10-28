import { Title, RightColumn, LeftColumn, PageContainer } from "components";

const Blog = () => (
  <PageContainer>
    <LeftColumn>
      <Title label="BLOG" />
    </LeftColumn>

    <RightColumn image="https://www.bestmenswear.com/images/Suits/1Suit.jpg" />
  </PageContainer>
);

export { Blog };
export default Blog;
