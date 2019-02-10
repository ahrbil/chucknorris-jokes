import React from "react";
import styled from "styled-components";

import logo from "../../assets/logo.png";

const Header = () => (
  <HeaderStyled>
    <header>
      <Logo>
        <img src={logo} alt="chucknorris jokes logo" />
      </Logo>
      <H1>Chucknorris Jokes</H1>
    </header>
  </HeaderStyled>
);

export default Header;

const HeaderStyled = styled.div`
  padding: 7px 16px;
  box-shadow: 1px 1px 9px #d2d2d2;
  margin-bottom: 2rem;
  header {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
`;

const Logo = styled.div`
  width: 40px;
  height: 40px;
  display: inline-block;
  margin-right: 1rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const H1 = styled.h1`
  font-size: 1.1rem;
`;
