import { useContext } from "react";
import styled from "styled-components";
import { ReactComponent as ShoppingCard } from "../../assets/shopping-bag.svg";
import { ToggleContext } from "../../contexts/toggle.context";

const CardIcon = () => {
  const { toggle, setToggle } = useContext(ToggleContext);

  const toggleIsCartOpen = () => setToggle(!toggle);

  return (
    <Wrapper onClick={toggleIsCartOpen}>
      <Icon />
      <Span>10</Span>
    </Wrapper>
  );
};

export default CardIcon;

const Wrapper = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Icon = styled(ShoppingCard)`
  width: 24px;
  height: 24px;
`;
const Span = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
