import React from 'react'
import styled from 'styled-components'

function Menu() {
  
  const Circle = styled.div`
  background-color: #0c819c;
  border-radius: 999999px;
  height: 35px;
  opacity: 0.5;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: .5rem .5rem;  
  float: left;
  padding: .5em ;
  margin: .4em;  
  @media (min-width: 600px){
    width: 5%;
  }
 
  `;
  const Lines = styled.div`
    width: 20px;
    height: 3px;
    background-color:white;
    margin: 3px ;
    transition: 0.4s;
    ${Circle}:hover & {
      background-color: #074b3db;
    opacity: 0.5;
    }
  `;
    return(
    <Circle>
        <i>
            <Lines></Lines>
            <Lines></Lines>
            <Lines></Lines>
        </i>
    </Circle> 
  )

};

export default Menu;