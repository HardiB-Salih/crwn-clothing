import { useContext } from "react";
import styled from "styled-components";
import { ToggleContext } from "../../contexts/toggle.context";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(ToggleContext);
  const { name, price, imageUrl } = product;

  const addProductToCard = () => addItemToCart(product);
  return (
    <Wrapper>
      <Image src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button onClick={addProductToCard}>Add To Card</Button>
    </Wrapper>
  );
};

export default ProductCard;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  * {
    transition: 0.5s ease-in-out;
  }

  :hover {
    img {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;
const Image = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`;
const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;
const Price = styled.span`
  width: 10%;
`;
const Button = styled.button`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  background: black;
  color: white;
  border: none;
  padding: 15px 30px;
  align-items: center;

  :hover {
    background: white;
    color: black;
  }
`;
