import React from "react";
import { Dropdown, Search } from "semantic-ui-react";
import "./MainMenu.scss";

const MainMenu = () => {
  return (
    <div className="component__main-menu">
      <div className="menu-options">
        <Dropdown item icon="bars" simple>
          <Dropdown.Menu>
            <Dropdown.Item>Home</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="search">
        <Search />
      </div>
      <div className="user-menu">
        <Dropdown item icon="user" simple>
          <Dropdown.Menu>
            <Dropdown.Item>Login</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default MainMenu;
