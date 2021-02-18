// React
import React from 'react';
// PropTypes
import PropTypes from 'prop-types';
// Styles
import {
  ToggleWrapper,
  SwitchHandleWrapper,
  Handle,
  SwitchWrapper,
  CheckBox,
  Circle,
} from './styles';

const ToggleButton = ({ checked, handleClick, title }) => {
  return (
    <ToggleWrapper>
      <SwitchHandleWrapper>
        <Handle>
          <SwitchWrapper>
            <CheckBox checked={checked} onChange={handleClick} />
            <Circle checked={checked} />
          </SwitchWrapper>
        </Handle>
      </SwitchHandleWrapper>
      {title}
    </ToggleWrapper>
  );
};

ToggleButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ToggleButton;
