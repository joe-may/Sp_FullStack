import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  
 
  li {
    padding: 18px 20px;
    color:white;
    
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a  class="homeNav" href="/home" >HOME</a></li>
      <li><a class="videosNav" href="/all_videos">VIDEOS</a></li>
      <li><a class="feedbackNav" href="/feedback">FEEDBACK</a></li>
    </Ul>
  )
}

export default RightNav
