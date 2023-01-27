import styled from "styled-components";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <Wrapper>
      <Image src={imageUrl} alt={`${name}`} />
      <ItemDetail>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X ${price}
        </span>
      </ItemDetail>
    </Wrapper>
  );
};

export default CartItem;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;
const Image = styled.img`
  width: 30%;
`;
const ItemDetail = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  .name {
    font-size: 16px;
  }
`;
