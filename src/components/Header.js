import styled from "styled-components";
import LogoImage from "../assets/logo2.png";
import CartImage from "../assets/cart-icon.png";
import { Link } from "react-router-dom";
import { Title } from "./Typography";

const Header = ({ cart }) => {
  let url = "%2Aberikut+pesanan+saya%3A%2A+%0D%0A%0D%0A";
  url += cart
    .map(
      ({ price, name, item }) =>
        `${name}%3A+${price}+X+${item}+%3D+${price * item}%0D%0A`
    )
    .join("");

  if (cart.length !== 0) {
    const total = cart
      .map((item) => item.price * item.item)
      .reduce((prev, curr) => prev + curr);
    console.log({ total });
    url += `%0D%0A%2Ajumlah%3A+${total}%2A`;
  }
  return (
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
          <a
            href={`https://api.whatsapp.com/send/?phone=6281286603892&text=${url}&app_absent=0`}
            target="blank"
          >
            <div style={{ position: "relative" }}>
              <CartIcon src={CartImage} alt="cart-icon" />
              {cart.length !== 0 && (
                <div
                  style={{
                    width: 20,
                    height: 20,
                    background: "green",
                    borderRadius: 10,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontWeight: "bold",
                    position: "absolute",
                    top: -10,
                    right: 8,
                  }}
                >
                  {cart.length}
                </div>
              )}
            </div>
          </a>
        </RightMenu>
      </Navbar>
    </Section>
  );
};

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
  height: 24px;
  @media only screen and (min-width: 800px) {
    height: 28px;
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
