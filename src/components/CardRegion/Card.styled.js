import styled from 'styled-components';

const CardRegion = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    flex-basis: 50%;
    padding: 2rem 3rem;
  }

  @media (min-width: 992px) {
    flex-basis: 25%;
  }
`;

const CardTitle = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const CardTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 100px;
  margin-bottom: 1rem;
`;

const CardRight = styled.div`
  display: flex;
  justify-content: center;
`;

const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardStatus = styled.h1`
  font-size: 1rem;
`;

const CardTotal = styled.h2`
  font-size: 1.5rem;
`;

export {
  CardLeft,
  CardRegion,
  CardRight,
  CardStatus,
  CardTitle,
  CardTop,
  CardTotal
}