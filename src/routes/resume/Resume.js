import { Title, RightColumn, LeftColumn, PageContainer } from "components";

const Resume = () => (
  <PageContainer>
    <LeftColumn>
      <Title label="RESUME" />
    </LeftColumn>

    <RightColumn image="https://www.bestmenswear.com/images/Suits/1Suit.jpg" />
  </PageContainer>
);

export { Resume };
export default Resume;
