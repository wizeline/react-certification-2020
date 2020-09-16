import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Search } from "semantic-ui-react";
import "./MainMenu.scss";

const MainMenu = () => {
  return (
    <div className="component__main-menu">
      <div className="menu-options">
        <Dropdown item icon="bars" simple>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/">Home</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="search">
        <Search />
      </div>
      <div className="user-menu">
        <Dropdown item icon="user" simple>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/login">let me in</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default MainMenu;
