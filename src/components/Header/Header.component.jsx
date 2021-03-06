import React from 'react';
import { Search } from '../Search/Search.component';
import Toogle from '../Toogle';
import Button from '../Button';
import Navbar from '../NarvBar';

import {Container} from './styled';


const Header = () => {
  return (
    <Container>
      <Navbar />
      <Search />
      <Toogle />
      <Button />
    </Container>
  )
}

export default Header