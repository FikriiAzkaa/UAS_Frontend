import {
  HeroContainer,
  HeroTitle,
  HeroButton,
  HeroDetail,
  HeroSection,
  HeroSubtitle,
  HeroImage,
  HeroLeft,
  HeroRight
}
from "./Hero.styled"

function Hero() {
  return (
    <HeroContainer>
    <HeroSection>
      <HeroLeft>
        <HeroTitle>COVID ID</HeroTitle>
        <HeroSubtitle>Monitoring Perkembangan Covid</HeroSubtitle>
        <HeroDetail>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          odio. Dolor non quasi voluptate, quidem voluptatum corporis iusto
          illum sequi assumenda nam doloremque modi possimus laborum animi rem
          nulla eligendi beatae voluptas ad, architecto nobis magni quas.
          Laboriosam, unde atque?
        </HeroDetail>
        <HeroButton>Vaccine</HeroButton>
      </HeroLeft>
      <HeroRight>
        <HeroImage src="https://rsbhayangkarabanjarmasin.co.id/wp/wp-content/uploads/2022/03/4990224-1024x683.jpg" alt="" />
      </HeroRight>
    </HeroSection>
  </HeroContainer>
  )
}

export default Hero