import { useContext } from "react";
import styled from "styled-components";
import { ToggleContext } from "../../contexts/toggle.context";

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemToCart, clearItemToCart } =
    useContext(ToggleContext);
  const { name, imageUrl, price, quantity } = cartItem;
  const clearItemHandler = () => clearItemToCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={imageUrl} alt={`${name}`} />
      </ImageWrapper>
      <Name> {name} </Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveBtn onClick={clearItemHandler}>&#10005;</RemoveBtn>
    </Wrapper>
  );
};

export default CheckoutItem;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;
const ImageWrapper = styled.div`
  width: 23%;
  padding-right: 15px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const RemoveBtn = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
const Name = styled.span`
  width: 23%;
`;
const Quantity = styled.span`
  width: 23%;
  display: flex;
`;
const Price = styled.span`
  width: 23%;
`;
const Arrow = styled.div`
  cursor: pointer;
`;
const Value = styled.span`
  margin: 0 20px;
`;
