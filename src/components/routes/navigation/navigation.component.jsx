import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";

const Navigation = () => {
  return (
    <Fragment>
      <Wrapper>
        <NavLogo to="/">
          <CrownLogo className="logo" />
        </NavLogo>

        <NavLinkWrapper>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/auth">SIGN IN</NavLink>
        </NavLinkWrapper>
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
