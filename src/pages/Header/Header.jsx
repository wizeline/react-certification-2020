import React from 'react';
import { Switch, Input, Avatar, Dropdown, Menu } from 'antd';
import { UserOutlined, MenuOutlined } from '@ant-design/icons';
import { HeaderGeneral, LogSec, SearchSec } from './Header.Style';

const Header = () => {
  const { Search } = Input;
  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }
  const menu = () => {
    <Menu>
      <Menu.Item key="0">
        <a target="_blank" rel="noopener noreferrer" href="/">
          Home
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a target="_blank" rel="noopener noreferrer" href="/">
          Contacto
        </a>
      </Menu.Item>
    </Menu>;
  };

  return (
    <HeaderGeneral>
      <SearchSec>
        <Dropdown overlay={menu}>
          <MenuOutlined />
        </Dropdown>
        <Search placeholder="Wizeline" style={{ width: 200, margin: ' 0 5% ' }} />
      </SearchSec>
      <LogSec>
        <div>
          <Switch defaultChecked onChange={onChange} />
          <h5>To Dark Side</h5>
        </div>
        <Avatar size={40} icon={<UserOutlined />} />
      </LogSec>
    </HeaderGeneral>
  );
};

export default Header;
