import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Navbar.styles.css';

function Navbar({ setInputState }) {
  const handleInput = (event) => {
    event.persist();
    if (event) {
      setInputState(event.target.value);
    }
  };

  return (
    <section className="navbar">
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="favorites" className="menu-item" href="/favorites">Favorites</a>
        <a id="logout" className="menu-item" href="/login">Logout</a>
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
      </Menu>
      <input className="search-input" type="text" onChange={handleInput} />
    </section>
  );
}

export default Navbar;
