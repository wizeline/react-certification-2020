// React
import React, { useState } from 'react';
// Components
import IconButton from '../Buttons/Icon';
import ToggleButton from '../Buttons/Toggle';
import InputText from '../Inputs/Text';
// Styles
import { AppBarWrapper, Header, RightWrapper } from './styles';
// SVG
import menu from '../../../assets/menu.svg';
import { ReactComponent as IconProfile } from '../../../assets/account.svg';
// Provider
import { useTheme } from '../../../providers/theme';
import { useVideos } from '../../../providers/Videos/Videos.provider';

const AppBar = () => {
  const { selected, toggleTheme } = useTheme();
  const { filterVideos } = useVideos();
  const [theme, setTheme] = useState(selected);

  // handle functions
  const filter = ({ target }) => {
    filterVideos(target.value);
  };
  const handleTheme = ({ target }) => {
    toggleTheme(target.checked);
    setTheme(target.checked);
  };

  const handleMenu = () => {
    console.log('menu');
  };

  const handleLogin = () => {
    console.log('login');
  };

  return (
    <Header data-testid="header-test">
      <AppBarWrapper>
        <IconButton
          testid="menu-button"
          image={menu}
          className="menu"
          handleClick={handleMenu}
        />
        <InputText placeholder="Search..." icon onChange={filter} />
        <RightWrapper>
          <ToggleButton handleClick={handleTheme} checked={theme} title="Dark mode" />
          <IconButton testid="login-button" className="bigger" handleClick={handleLogin}>
            <IconProfile />
          </IconButton>
        </RightWrapper>
      </AppBarWrapper>
    </Header>
  );
};

export default AppBar;
