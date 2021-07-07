import React from 'react';
import { Switch, Input, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { HeaderGeneral, LogSec, SearchSec } from './Header.Style';
import wizLogo from '../../utils/assets/Wizeline.png';

const Header = () => {
  const { Search } = Input;
  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  return (
    <HeaderGeneral>
      <SearchSec>
        <Link to="/">
          <img
            style={{ width: '30%', height: 'auto' }}
            alt="WizelineLogo"
            src={wizLogo}
          />
        </Link>
        <Search placeholder="Wizeline" style={{ width: 200, margin: ' 0 5% ' }} />
      </SearchSec>
      <LogSec>
        <div>
          <Switch defaultChecked onChange={onChange} />
          <h5>To Dark Side</h5>
        </div>
        <Link to="/login">
          <Avatar size={40} icon={<UserOutlined />} />
        </Link>
      </LogSec>
    </HeaderGeneral>
  );
};

export default Header;
