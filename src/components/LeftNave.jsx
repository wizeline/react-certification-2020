import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (min-width: 320px) {
    flex-flow: column nowrap;
    background-color: #424242;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const LeftNav =  ({ open }) => {
    return (
      <Ul open={open}>
        <li>Home</li>
        <li>Favorites</li>
      </Ul>
    )
}

export default LeftNav;