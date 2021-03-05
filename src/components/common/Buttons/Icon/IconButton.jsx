// React
import React from 'react';
// PropTypes
import PropTypes from 'prop-types';
// Styles
import { ButtonWrapper, Icon } from './styles';

const IconButton = ({ image, className, handleClick, children, testid }) => {
  return (
    <ButtonWrapper className={className} data-testid={testid} onClick={handleClick}>
      <Icon className={className} image={image}>
        {children}
      </Icon>
    </ButtonWrapper>
  );
};

IconButton.defaultProps = {
  className: '',
  image: '',
  testid: 'icon-button',
};

IconButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  image: PropTypes.string,
  className: PropTypes.string,
  testid: PropTypes.string,
};

export default IconButton;
