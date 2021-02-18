// React
import React from 'react';
// PropTypes
import PropTypes from 'prop-types';
// Styles
import { Input, InputWrapper, IconWrapper } from './styles';

const InputText = ({ placeholder, onChange, icon }) => {
  return (
    <InputWrapper>
      {icon && <IconWrapper />}
      <Input placeholder={placeholder} onChange={onChange} />
    </InputWrapper>
  );
};

InputText.defaultProps = {
  icon: false,
};

InputText.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.bool,
};

export default InputText;
