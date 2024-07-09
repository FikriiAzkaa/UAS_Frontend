import styled from "styled-components";

const CardHero = styled.div`
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: all 0.3s ease;
  margin: 1rem;
  cursor: pointer;
  padding: 5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 5rem;
  }
`;

const CardStatus = styled.h3`
  font-size: 1.5rem;
  color: #141414;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CardTotal = styled.h4`
  font-size: 1.5rem;
  color: rgb(68, 68, 251);

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export {
  CardHero,
  CardStatus,
  CardTotal
}