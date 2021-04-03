import styled from 'styled-components'

export const Container = styled.div`
border: 10px ;
display: static;
margin-top: 0px;
overflow: hidden;
`;

export const Video = styled.div`
border: 10px ;
border: 10px;
padding 5px;
border-radius: 5px;
position:relative;
    @media (min-width: 600px){
     
      max-width: 60%;
      height: 800px;  }
    
`;
export const PlayBox = styled.div`
width: 100%; 
max-width: 1000px; 
height: 500px;
background-color: red;
    
`;

export const VideoPlayer = styled.iframe`
position: relative;  
width: 100%;
height: 500px;
`;

export const DescriptionBox = styled.div`

`;

export const VideoTitle = styled.h1`
    font-size: 22px;
  font-weight: bold;
  position:relative;
 
`;

export const VideoDescription = styled.p`
position:relative;
margin-top: 12px;
font-size: 18px;
color: black;
text-align: left;
font-family: sans-serif;
`;

export const VideoList = styled.div`
border: 10px;
padding 5px;
position:relative;
top: -810px;  
left: 61%;
height: 800px;
width: 38%;  
  overflow-x: hidden;
  @media (min-width: 600px){}
`;

export const Element = styled.div`

height: -10px;
width: 100px;
  border: 1px solid #ddd;
  border-radius: 5px;
  flex-basis: calc(20% - 22px);
  cursor: pointer;
  padding: 9px 10px;
`;

export const VideoItems = styled.div`
height: -80px;
background-color: ;
border-style: outset;
`;
export const IMG = styled.img`
  position:absolute;
  letf:0;
    
    
`;
export const Parag = styled.div`
left:130px;
font-size: 18px;
background-color: ;
height: 100px;
top: -15px;
width: 80%;
position:relative;
text-align-last: left;



`;
export const TitleVideo = styled.p`
font-size: 16px;
font-weight: bold;
font-family: Arial, Helvetica, sans-serif;
  

`;
