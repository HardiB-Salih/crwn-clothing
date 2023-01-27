import styled from "styled-components";

const CardDropDown = () => {
  return (
    <Wrappe>
      <CardItem />
      <Button>Go to Checkout</Button>
    </Wrappe>
  );
};

export default CardDropDown;

const Wrappe = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  /* .empty-message {
    font-size: 18px;
    margin: 50px auto;
  } */
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
