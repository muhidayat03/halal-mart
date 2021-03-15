import styled from "styled-components";
import LogoImage from "../assets/logo2.png";
import CartImage from "../assets/cart-icon.png";
import { Link } from "react-router-dom";
import { Title } from "./Typography";

const Header = () => (
  <Section>
    <Navbar className="navigation">
      <Link to="banner-section">
        <Logo src={LogoImage} alt="logo" />
      </Link>
      <RightMenu>
        <Menu>
          <StyledLink to="banner-section">
            <MenuItem>Beranda</MenuItem>
          </StyledLink>
          <StyledLink to="banner-section">
            <MenuItem>Produk</MenuItem>
          </StyledLink>
          <StyledLink to="banner-section">
            <MenuItem>Member</MenuItem>
          </StyledLink>
        </Menu>
        <Link to="banner-section">
          <CartIcon src={CartImage} alt="cart-icon" />
        </Link>
      </RightMenu>
    </Navbar>
  </Section>
);

export default Header;

const Section = styled.div`
  width: 100%;
  top: 0;
  position: fixed;
  background-color: white;
  z-index: 99;
  border-bottom: 1px solid #eeee;
`;

const Logo = styled.img`
  padding: 0 20px;
  height: 30px;

  @media only screen and (min-width: 800px) {
    height: 36px;
  }
`;

const CartIcon = styled.img`
  padding: 0 20px;
  height: 20px;
  @media only screen and (min-width: 800px) {
    height: 24px;
  }
`;

const Navbar = styled.nav`
  max-width: 1280px;
  min-height: 60px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .navigation button {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
`;

const Menu = styled.div`
  align-items: center;
  justify-content: flex-end;
  margin: 0;
  display: none;
  @media only screen and (min-width: 800px) {
    display: flex;
  }
`;

const MenuItem = styled(Title)`
  font-size: 14px;
  font-weight: 400;
`;

const StyledLink = styled(Link)`
  margin: 0 4px;
  pointer-events: all;
  padding: 8px 14px;
  border-radius: 2em;
  transition: background 0.25s ease-out;
  text-decoration: none;
  :hover,
  :focus {
    font-weight: bold;
  }
  @media only screen and (max-width: 600px) {
    padding: 4px 8px;
    font-size: 12px;
  }
`;
