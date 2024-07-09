import {
  FooterContainer,
  FooterElement,
  FooterTitle,
  FooterOwner
} from "./Footer.styled"
function Footer() {
  return (
    <FooterContainer>
      <FooterElement>
        <FooterTitle>Covid App</FooterTitle>
        <FooterOwner>Created by @fikriazkui</FooterOwner>
      </FooterElement>
    </FooterContainer>
  );
}

export default Footer;
