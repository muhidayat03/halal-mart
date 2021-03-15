import styled from "styled-components";
import "./App.css";

import { Title, Paragraph } from "./components/Typography";
import Header from "./components/Header";
import { Bag, House, People } from "react-bootstrap-icons";
import { Col, Row } from "./components/Grid";
import ProductImage from "./assets/produk.png";

function App() {
  return (
    <>
      <Header></Header>

      <Section>
        <div
          style={{ padding: "60px 0 60px", maxWidth: "1280px", margin: "auto" }}
        >
          <Title>Produk</Title>
          <Row>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </Row>
        </div>
      </Section>

      <FooterContainer>
        <FooterItemContainer>
          <House size={18} color="#646464"></House>
          <FooterItemName>Beranda</FooterItemName>
        </FooterItemContainer>
        <FooterItemContainer>
          <Bag size={18} color="#646464"></Bag>

          <FooterItemName>Produk</FooterItemName>
        </FooterItemContainer>
        <FooterItemContainer>
          <div
            style={{
              height: 19,
              position: "relative",
              width: 19,
            }}
          >
            <People
              size={19}
              color="#646464"
              style={{ position: "absolute", top: 2 }}
            ></People>
          </div>
          <FooterItemName>Member</FooterItemName>
        </FooterItemContainer>
      </FooterContainer>
    </>
  );
}

export default App;

const Section = styled.div`
  width: 100%;
  top: 0;
  /* background-color: white; */
  z-index: 99;
  padding: 20px;
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 48px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: rgb(108 114 124 / 16%) 0px -2px 4px 0px;
  z-index: 20;
  background-color: white;
  @media only screen and (min-width: 800px) {
    display: none;
  }
`;

const FooterItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FooterItemName = styled(Title)`
  padding-top: 2px;
  font-size: 11px;
  font-weight: 400;
`;

const ProductItem = () => (
  <Col lg={4} md={3} sm={2} xs={2} padding="10px">
    <ProductCard>
      <ProductImageWrapper src={ProductImage}></ProductImageWrapper>
      <ProductDesc>
        <ProductTitle>Kopi Tujuh Elemen</ProductTitle>
        <ProductPrice>Rp 100.000</ProductPrice>
      </ProductDesc>
    </ProductCard>
  </Col>
);

const ProductCard = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgb(49 53 59 / 12%) 0px 1px 6px 0px;
`;

const ProductDesc = styled.div`
  padding: 12px 14px;
  /* background-color: red; */
`;

const ProductTitle = styled(Paragraph)`
  margin: 0;
  font-size: 14px;
`;
const ProductPrice = styled(Title)`
  color: black;
`;

const ProductImageWrapper = styled.img`
  display: block;
  width: 100%;
  max-width: 200px;
  height: 140px;
  margin: auto;
  object-fit: cover;
`;
