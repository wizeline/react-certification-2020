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
      <Input type="text" placeholder={placeholder} onChange={onChange} />
    </InputWrapper>
  );
};

InputText.defaultProps = {
  icon: false,
  placeholder: '',
  onChange: () => {},
};

InputText.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  icon: PropTypes.bool,
};

export default InputText;
