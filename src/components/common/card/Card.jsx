// React
import React from 'react';
// PropTypes
import PropTypes from 'prop-types';
// Styles
import {
  CardContainer,
  CardImage,
  CardTitle,
  CardInnerContainer,
  CardDescription,
} from './styles';

const Card = ({ image, title, description, url }) => {
  const handleClick = () => {
    console.log({ url });
  };
  return (
    <CardContainer onClick={handleClick} data-testid="card-test">
      <CardImage image={image} />
      <CardInnerContainer>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardInnerContainer>
    </CardContainer>
  );
};

Card.defaultProps = {
  url: '',
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default Card;
