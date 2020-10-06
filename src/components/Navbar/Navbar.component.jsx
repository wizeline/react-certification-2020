import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useAuth } from '../../providers/Auth';
import { MenuStyles, NavbarWrapper } from './NavbarStyles';

function Navbar({ setInputState }) {
  const handleInput = (event) => {
    event.persist();
    if (event) {
      setInputState(event.target.value);
    }
  };

  const { logout } = useAuth();

  return (
    <NavbarWrapper>
      <MenuStyles>
        <Menu>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="favorites" className="menu-item" href="/favorites">
            Favorites
          </a>
          <a id="logout" className="menu-item" href="/login" onClick={logout}>
            Logout
          </a>
        </Menu>
      </MenuStyles>
      <input className="search-input" type="text" onChange={handleInput} />
    </NavbarWrapper>
  );
}

export default Navbar;
