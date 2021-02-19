import React from 'react';
import { Label, Container } from './styled';


const Toggle = () => {

  return (
    <Container>
      <Label className="switch">
        <input type="checkbox"  />
        <span className="slider round"></span>
      </Label>
    </Container>
  )
}

export default Toggle;

