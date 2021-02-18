// React
import React, { useState } from 'react';
// Redux
import { useDispatch } from 'react-redux';
// Actions
import mokupActions from '../../../store/mokup/actions';
import themeActions from '../../../store/theme/actions';
// Components
import IconButton from '../Buttons/Icon';
import ToggleButton from '../Buttons/Toggle';
import InputText from '../Inputs/Text';
// Styles
import { AppBarWrapper, Header, RightWrapper } from './styles';
// SVG
import menu from '../../../assets/menu.svg';
import { ReactComponent as IconProfile } from '../../../assets/account.svg';
// Utils
import { THEME_SELECTED } from '../../../utils/constants';
import { storage } from '../../../utils/storage';

const AppBar = () => {
  const dispatch = useDispatch();
  const selected = storage.get(THEME_SELECTED);
  const [theme, setTheme] = useState(selected);
  const filter = ({ target }) => {
    dispatch(mokupActions.filterMokup(target.value));
  };
  const handleTheme = ({ target }) => {
    dispatch(themeActions.toggle(target.checked));
    setTheme(target.checked);
  };

  const handleMenu = () => {
    console.log('menu');
  };

  const handleLogin = () => {
    console.log('login');
  };

  return (
    <Header>
      <AppBarWrapper>
        <IconButton image={menu} className="menu" handleClick={handleMenu} />
        <InputText placeholder="Search..." icon onChange={filter} />
        <RightWrapper>
          <ToggleButton handleClick={handleTheme} checked={theme} title="Dark mode" />
          <IconButton className="bigger" handleClick={handleLogin}>
            <IconProfile />
          </IconButton>
        </RightWrapper>
      </AppBarWrapper>
    </Header>
  );
};

export default AppBar;
