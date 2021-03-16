import styled from "styled-components";
import "./App.css";
import React, { useState } from "react";

import { Title, Paragraph } from "./components/Typography";
import Header from "./components/Header";
import {
  Bag,
  House,
  People,
  PlusCircle,
  DashCircle,
} from "react-bootstrap-icons";
import { Col, Row } from "./components/Grid";

function App() {
  const [product, setProduct] = useState([
    { id: 1, item: 0, name: "Diabextrac", price: 130000 },
    { id: 2, item: 0, name: "Gamat Kapsul", price: 130000 },
    { id: 3, item: 0, name: "Ginextrac", price: 90000 },
    { id: 4, item: 0, name: "Habbassauda", price: 50000 },
    { id: 5, item: 0, name: "Harumi", price: 70000 },
    { id: 6, item: 0, name: "Kelosin", price: 90000 },
    { id: 7, item: 0, name: "Langsingin", price: 120000 },
    { id: 8, item: 0, name: "Laurik", price: 65000 },
    { id: 9, item: 0, name: "Magafit", price: 900000 },
    { id: 10, item: 0, name: "Mengkudu", price: 80000 },
    { id: 11, item: 0, name: "Habbat Softgel", price: 95000 },
    { id: 12, item: 0, name: "Minyak Herba", price: 50000 },
  ]);

  const addItem = (id) => {
    const productIndex = product.findIndex((item) => item.id === id);
    const productTemp = [...product];
    productTemp[productIndex].item++;
    setProduct(productTemp);
  };

  const removeItem = (id) => {
    const productIndex = product.findIndex((item) => item.id === id);
    const productTemp = [...product];
    if (productTemp[productIndex].item >= 1) {
      productTemp[productIndex].item--;
      setProduct(productTemp);
    }
  };

  const cart = product.filter(({ item }) => item >= 1);

  const ProductItem = ({ name, item, id, price }) => {
    return (
      <Col lg={4} md={3} sm={2} xs={2} padding="10px">
        <ProductCard>
          <ProductImageWrapper
            src={process.env.PUBLIC_URL + "/image/" + id + ".png"}
          ></ProductImageWrapper>
          <ProductDesc>
            <ProductTitle>{name}</ProductTitle>
            <ProductPrice>Rp {price}</ProductPrice>
            <ProductTotal>
              <div>
                <DashCircle
                  size={24}
                  color="#646464"
                  onClick={() => removeItem(id)}
                />
              </div>
              <div style={{ fontSize: 20, padding: "0px 20px" }}>{item}</div>
              <div>
                <PlusCircle
                  size={24}
                  color="#646464"
                  onClick={() => addItem(id)}
                />
              </div>
            </ProductTotal>
          </ProductDesc>
        </ProductCard>
      </Col>
    );
  };

  return (
    <>
      <Header cart={cart} />

      <Section>
        <div
          style={{ padding: "60px 0 60px", maxWidth: "1280px", margin: "auto" }}
        >
          <Title>Produk</Title>
          <Row>
            {product.map(({ item, name, id, price }, i) => (
              <ProductItem name={name} item={item} id={id} price={price} />
            ))}
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

// const ProductItem = ({ name, item, id }) => (
//   <Col lg={4} md={3} sm={2} xs={2} padding="10px">
//     <ProductCard>
//       <ProductImageWrapper src={ProductImage}></ProductImageWrapper>
//       <ProductDesc>
//         <ProductTitle>Kopi Tujuh Elemen</ProductTitle>
//         <ProductPrice>Rp 100.000</ProductPrice>
//         <ProductTotal>
//           <DashCircle
//             size={24}
//             color="#646464"
//             onClick={(index) => addItem(id)}
//           />
//           <div style={{ fontSize: 20, padding: "0px 20px" }}>{item}</div>
//           <PlusCircle
//             size={24}
//             color="#646464"
//             onClick={(index) => removeItem(index)}
//           />
//         </ProductTotal>
//       </ProductDesc>
//     </ProductCard>
//   </Col>
// );

const ProductCard = styled.div`
  width: 100%;
  max-width: 240px;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgb(49 53 59 / 12%) 0px 1px 6px 0px;
`;

const ProductDesc = styled.div`
  padding: 12px 18px;
  /* background-color: red; */
`;
const ProductTotal = styled.div`
  display: flex;
  justify-content: center;
  padding: 14px 20px;
`;

const ProductTitle = styled(Paragraph)`
  margin: 0;
  font-size: 14px;
  text-align: center;
`;
const ProductPrice = styled(Title)`
  color: black;
  text-align: center;
`;

const ProductImageWrapper = styled.img`
  display: block;
  max-width: 160px;
  height: 160px;
  margin: auto;
  object-fit: cover;
`;
