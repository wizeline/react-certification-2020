import React from 'react';
import { useLocation } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { useAuth } from '../../providers/Auth';
import { MenuStyles, NavbarWrapper } from './NavbarStyles';

const home = "/";
const favorites = "/favorites";
const login = "/login";

function Navbar({ setInputState }) {
  const handleInput = (event) => {
    event.persist();
    if (event) {
      setInputState(event.target.value);
    }
  };

  const { logout } = useAuth();
  const { pathname } = useLocation();
  console.log('path', pathname, pathname === home, pathname === favorites);

  return (
    <NavbarWrapper>
      <MenuStyles>
        <Menu>
          <a
            id="home"
            className={`menu-item ${pathname === home ? 'selected' : ''}`}
            href={home}
          >
            Home
          </a>
          <a
            id="favorites"
            className={`menu-item ${pathname === favorites ? 'selected' : ''}`}
            href={favorites}
            selected={pathname === favorites}
          >
            Favorites
          </a>
          <a
            id="logout"
            className={`menu-item ${pathname === login ? 'selected' : ''}`}
            href={login}
            onClick={logout}
            selected={pathname === login}
          >
            Logout
          </a>
        </Menu>
      </MenuStyles>
      <input className="search-input" type="text" onChange={handleInput} />
    </NavbarWrapper>
  );
}

export default Navbar;
