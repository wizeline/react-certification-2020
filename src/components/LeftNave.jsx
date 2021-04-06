import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../providers/Auth';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  a {
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
    z-index: 99;
    a {
      color: #fff;
    }
  }
`;

const LeftNav =  ({ open, closeBurguer }) => {
  const { authenticated, logout } = useAuth();
  let history = useHistory();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <Ul open={open}>
      <Link to="/" onClick = {() => closeBurguer()}>Home</Link>
      {authenticated ?
        <>
        <Link to="/favorites" onClick = {() => closeBurguer()}>Favorites</Link>
        <Link to="/logout" onClick = {(event) => {closeBurguer(); deAuthenticate(event); }}>Log Out</Link>
        </> : null}
    </Ul>
  )
}

export default LeftNav;