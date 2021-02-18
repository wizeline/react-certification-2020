// React
import React from 'react';
// PropTypes
import PropTypes from 'prop-types';
// Styles
import { ButtonWrapper, Icon } from './styles';

const IconButton = ({ image, className, handleClick, children }) => {
  return (
    <ButtonWrapper className={className}>
      <Icon className={className} image={image} onClick={handleClick}>
        {children}
      </Icon>
    </ButtonWrapper>
  );
};

IconButton.defaultProps = {
  className: '',
};

IconButton.propTypes = {
  image: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default IconButton;
