import React from "react";
import styled from "styled-components";

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #090b13;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  color: #fff;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <Logo>
        <img
          src="/images/logo.svg"
          alt="Disney Plus Logo"
          onClick={() => {
            window.location.href = "/";
          }}
        />
      </Logo>
    </NavWrapper>
  );
};

export default Nav;
