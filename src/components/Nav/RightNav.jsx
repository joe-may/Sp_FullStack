import React from 'react';
import styled from 'styled-components';
import './navStyle.css';


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  
 
  li {
    padding: 9px 20px;
    color:white;
    z-index:900;
    font-size:1.6vw;
    font-family: chaloops, sans-serif;
    
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: -3;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 1.5rem;
    transition: transform 0.3s ease-in-out;
    z-index:2200;

    li {
      font-size:7.6vw;
      color: white;
    }
    
  }
`;

const RightNav = ({ open }) => {
  return (
    <div>
    <Ul open={open}>
      <li><a  class="homeNav" href="/home" >MYSTIC BADGES</a></li>
      <li><a class="videosNav" href="/all-videos">VIDEOS</a></li>
      {/* <li><a class="arcadeNav" href="/arcade-play">ARCADE</a></li> */}
      {/* <li><a class="mysticNav" href="/mysticbadge-play">MYSTIC BADGES</a></li> */}
      <li><a class="aboutNav" href="/about">ABOUT</a></li>
      <li><a class="contactNav" href="/contact">CONTACT US</a></li>
      
    </Ul>
    <link rel="stylesheet" href="https://use.typekit.net/wug4dcf.css"></link>

    </div>
   
     
  )
}

export default RightNav
