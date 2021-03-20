import styled from 'styled-components'

export const Container = styled.div`
display: flex;
justify-content: center;
margin-top: 80px;

`;

    export const Title = styled.h1`
    
    font-size: 50px;
    color: black;
    font-family: sans-serif;
    justify-content: center;
    position:absolute;
    margin-bottom: 25px;
    text-align-last: center;
    margin-top: 0px;
    margin-left: auto;
    margin-right: auto;
    
    `;
    export const Vid = styled.div`
    display: flex;
    justify-content: center;
  flex-wrap: wrap;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  
  
 
    `;

    export const VideoItems = styled.div`
    flex: ${props => props.ratio};
    height: 400px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px;
  flex-basis: calc(20% - 22px);
  cursor: pointer;
  padding: 9px 10px;
    `;

    export const Parag = styled.p`
    margin-top: 12px;
  font-size: 18px;
  color: black;
  text-align: left;
  font-family: sans-serif;
  
    `;
    export const IMG = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width:100%;
    background-size: contain;  
    `;
    export const TitleVideo = styled.p`
    font-size: 22px;
  font-weight: bold;
  
    `;

    export const Secondary = styled.p`
    font-size: 18px;
  color: rgba(136, 134, 134, 0.7);
    `;
    
   
