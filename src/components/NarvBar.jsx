import React from 'react';
import Burger from './Burguer';
import styled from "styled-components";

const Nav = styled.nav`
  height: 55px;
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
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar;