import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  background-color: rgb(68, 68, 251);
`;

const SectionNavbar = styled.nav`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 0;
  }

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const NavbarBrand = styled.h1`
  font-size: 2rem;
  color: #fff;
`;

const NavbarList = styled.ul`
  display: flex;
  list-style-type: none;
  text-align: center;
  margin: 2rem 0;
  font-size: 1.2rem;
  color: #fff;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 3rem;
  }
`;

const NavbarItem = styled.li`
  margin-right: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-right: 1rem;
  }
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;


export {
  SectionNavbar,
  NavbarBrand,
  NavbarContainer,
  NavbarItem,
  NavbarLink,
  NavbarList
}