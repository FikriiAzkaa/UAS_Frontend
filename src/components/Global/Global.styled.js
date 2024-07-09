import styled from "styled-components";

const GlobalContainer = styled.div`
  background-color: #00000007;
  padding: 5rem 0;
  margin-bottom: 2rem;

  @media (min-width: 992px) {
    padding: 5rem 0;
  }
`;

const GlobalSection = styled.section`

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const GlobalTitle = styled.h2`
  text-align: center;
  color: rgb(68, 68, 251);
  font-size: 2rem;
`;

const GlobalSubtitle = styled.h3`
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 2rem;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    flex-basis: 50%;
  }

  @media (min-width: 992px) {
    flex-basis: 25%;
  }
`;

export {
  GlobalContainer,
  GlobalSection,
  GlobalSubtitle,
  GlobalTitle,
  CardContainer,
}