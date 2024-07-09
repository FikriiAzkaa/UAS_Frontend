import {
  SectionNavbar,
  NavbarBrand,
  NavbarContainer,
  NavbarItem,
  NavbarLink,
  NavbarList
} from "./Navbar.styled"
function Navbar() {
  return (
    <NavbarContainer>
      <SectionNavbar>
        <NavbarBrand>COVID APP</NavbarBrand>
        <NavbarList>
          <NavbarItem>
            <NavbarLink to="/">Global</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/indonesia">Indonesia</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/provinsi">Provinsi</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/about">About</NavbarLink>
          </NavbarItem>
        </NavbarList>
      </SectionNavbar>
    </NavbarContainer>
  );
}

export default Navbar;
