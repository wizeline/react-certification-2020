import React from 'react';

import './Card.styles.css';
// import Styled from "./styled";

function Card({ title, description, thumbnail }) {
  return <div className="item">
    <h4>{title}</h4>
    <img src={thumbnail} alt=""/>
    <div class="">{description}</div>
  </div>;
}

// const Card = ({ title, description, thumbnail }) => (
//   <Styled.container>
//     <Styled.Title>{title}</Styled.Title>
//     <Styled.Thumbnail url={thumbnail}></Styled.Thumbnail>
//     <Styled.description>{description}</Styled.description>
//   </Styled.container>
// );

export default Card;
