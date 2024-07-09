import styled from "styled-components";

const RegionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegionSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RegionTitle = styled.h2`
  color: rgb(68, 68, 251);
  font-size: 2rem;
`;

const RegionSubtitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 3rem;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    flex-basis: 50%;
  }

  @media (min-width: 922px) {
    flex-basis: 25%;
  }
`;

export {
  RegionContainer,
  RegionSection,
  RegionSubtitle,
  RegionTitle,
  CardContainer,
};
