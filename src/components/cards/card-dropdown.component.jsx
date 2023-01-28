import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "./card-item.component";

const CardDropDown = () => {
  const { cartItems, setToggle } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    setToggle(false);
  };
  return (
    <Wrappe>
      {cartItems.length ? (
        <CardItem>
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </CardItem>
      ) : (
        <EmptyMessage>You Do Not have any item Shope buddy</EmptyMessage>
      )}

      <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
    </Wrappe>
  );
};

export default CardDropDown;

const Wrappe = styled.div`
  position: absolute;
  width: 260px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 60px;
  right: 40px;
  z-index: 5;
`;

const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
const CardItem = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
const Button = styled.button`
  background: black;
  color: wheat;
  border: none;
  padding: 15px 30px;
  align-items: center;
  margin-top: auto;

  :hover {
    background: wheat;
    color: black;
  }
`;
