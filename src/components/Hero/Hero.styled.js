import styled from "styled-components";

const HeroContainer = styled.div`
  padding: 2rem 1rem;

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
  }
`;

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const HeroLeft = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: start;
    flex-basis: 50%;
  }
`;

const HeroRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-basis: 50%;
  }
  @media (min-width: 992px) {
    flex-basis: 50%;
  }
  
`;

const HeroTitle = styled.h1`
  color: rgb(68, 68, 251);
  font-size: 2rem;

  @media (min-width: 992px) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  color: rgb(68, 68, 251);
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    text-align: left;
    font-size: 1.3rem;
  }

  @media (min-width: 992px) {
    font-size: 1.3rem;
  }
`;

const HeroDetail = styled.p`
  text-align: justify;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    font-size: 1.5rem;
  }
`;

const HeroButton = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border-radius: 10px;
  border: none;
  color: #fff;
  background-color: rgb(68, 68, 251);
  cursor: pointer;
  margin-bottom: 2rem;
`;

const HeroImage = styled.img`
  width: 250px;

  @media (min-width: 768px) {
    width: 350px;
  }
  @media (min-width: 992px) {
    width: 550px;
  }
`;

export {
  HeroContainer,
  HeroTitle,
  HeroButton,
  HeroDetail,
  HeroSection,
  HeroSubtitle,
  HeroImage,
  HeroLeft,
  HeroRight,
};
