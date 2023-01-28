import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CardDropDown from "../../components/cards/card-dropdown.component";
import CardIcon from "../../components/cards/card-icon.componet";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { toggle } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };
  return (
    <Fragment>
      <Wrapper>
        <NavLogo to="/">
          <CrownLogo className="logo" />
        </NavLogo>
        <NavLinkWrapper>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CardIcon />
        </NavLinkWrapper>
        {toggle && <CardDropDown />}
      </Wrapper>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

const Wrapper = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 0px 20px;
`;
const NavLogo = styled(Link)`
  .logo {
    height: 100%;
    width: 70px;
    padding: 10px;
  }
`;

const NavLinkWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
const SignOut = styled.div`
  padding: 10px 15px;
  cursor: pointer;
`;
