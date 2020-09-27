import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Dropdown, Icon } from "semantic-ui-react";

import { useAuth } from "../../providers/Auth";

import "./MainMenu.scss";

const MainMenu = ({ queryString, onSearch, onSetMode }) => {
  const history = useHistory();
  const { authenticated, logout } = useAuth();

  const deAuthenticate = (event) => {
    event.preventDefault();
    logout();
    history.push("/");
  };

  return (
    <div className="component__main-menu">
      <div className="menu-options">
        <Dropdown item icon="bars" simple>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/">Home</Link>
            </Dropdown.Item>
            {authenticated && (
              <Dropdown.Item>
                <Link to="/secret">Secret</Link>
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="component__search-bar">
        <input
          onChange={(event) => onSearch(event.target.value)}
          name="video-search"
          type="text"
          value={queryString}
        />
        {console.log({ queryString })}
      </div>
      <div className="theme-options">
        <Button.Group>
          <Button
            icon="sun"
            content="Light mode"
            onClick={() => onSetMode("light")}
          />
          <Button
            icon="moon"
            content="Dark mode"
            onClick={() => onSetMode("dark")}
          />
        </Button.Group>
      </div>
      <div className="user-menu">
        {authenticated ? (
          <Link to="/" onClick={deAuthenticate}>
            <Icon name="user" />
          </Link>
        ) : (
          <Link to="/login">
            <Icon name="user outline" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default MainMenu;
