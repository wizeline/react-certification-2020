import React from 'react';
import { Label, Container, DarkMode } from './styled';
import { ThemeContext } from '../../state/theme-context';

const Toggle = () => {
  const { theme, toggle } = React.useContext(ThemeContext)

  return (
      <Container>
        <Label className="switch">
          <input type="checkbox"  onClick={toggle}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              outline: 'none'
            }} />
          <span className="slider round"></span>
        </Label>
        <DarkMode>Dark Mode</DarkMode>
      </Container>
  )
}

export default Toggle;

