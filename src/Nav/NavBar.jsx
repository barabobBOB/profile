import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Loading from "../profile_logo.jpg/"
const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
      <img src={Loading} className="logoimg" alt="profile_logo"/>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar