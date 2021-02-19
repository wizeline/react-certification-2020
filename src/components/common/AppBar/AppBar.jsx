// React
import React, { useState } from 'react';
// Redux
import { useDispatch } from 'react-redux';
// Actions
import mokupActions from '../../../store/mokup/actions';
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

const AppBar = () => {
  const dispatch = useDispatch();
  const { selected, toggleTheme } = useTheme();
  const [theme, setTheme] = useState(selected);

  // handle functions
  const filter = ({ target }) => {
    dispatch(mokupActions.filterMokup(target.value));
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
