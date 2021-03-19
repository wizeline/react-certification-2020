import React from 'react';
import { Search } from '../Search/Search.component';
import Toogle from '../Toogle';
import Button from '../Button';
import Navbar from '../NarvBar';

import {Container} from './styled';
import { ThemeContext } from '../../state/theme-context';


const Header = () => {
  const { theme, toggle, dark } = React.useContext(ThemeContext);
  return (
    <Container headerColor={theme.headerColor} >
      <Navbar />
      <Search />
      <Toogle />
      <Button />
    </Container>
  )
}

export default Header