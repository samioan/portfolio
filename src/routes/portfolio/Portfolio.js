import { Title, RightColumn, LeftColumn, PageContainer } from "components";

const Portfolio = () => (
  <PageContainer>
    <LeftColumn>
      <Title label="PORTFOLIO" />
    </LeftColumn>

    <RightColumn image="https://www.bestmenswear.com/images/Suits/1Suit.jpg" />
  </PageContainer>
);

export { Portfolio };
export default Portfolio;
