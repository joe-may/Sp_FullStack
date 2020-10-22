import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 85px;
 
  // border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color:#3D2798;
  z-index:2200;

  .logo {
    position: relative;
    width:16vw;
    max-width:350px;
    min-width:200px;

    top:0;
    padding: 15px 0;
    color:white;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <a href="/home">
                <img src='../StudyPup_assets/StudyPup_LogoPup.png' alt=""  class='logo'/>
                </a>
      <Burger />
    </Nav>
  )
}

export default Navbar
