import React from 'react';
import { Switch, Input, Avatar } from 'antd';
import {HeaderGeneral, LogSec, SearchSec } from './Header.Style';
import { UserOutlined } from '@ant-design/icons';

const Header = () => {

  const { Search } = Input
  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  return (
    <HeaderGeneral>
      <SearchSec>
        <Search placeholder="Wizeline" style={{ width: 200, margin: "5% 0"}}/>
      </SearchSec>
        <LogSec>
          <div>
            <Switch defaultChecked onChange={onChange} />
            <h5>To Dark Side</h5>
          </div>
          <Avatar size={40} icon={<UserOutlined />} />
        </LogSec>
    </HeaderGeneral>
  )
}

export default Header;