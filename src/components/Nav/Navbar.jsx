import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
 
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color:#00367F;

  .logo {
    padding: 15px 0;
    color:white;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
      StudyPup
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
