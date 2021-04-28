import styled from 'styled-components'

export const Container = styled.div`
padding: 10px;
overflow: hidden;


`;

export const Video = styled.div`
border: 10px ;
border: 10px;
padding 5px;
border-radius: 5px;

    @media (min-width: 600px){
      max-width: 60%;
      height: 800px;  }
    
`;
export const PlayBox = styled.div`
width: 100%; 
max-width: 1000px; 
height: 500px;

    
`;

export const VideoPlayer = styled.iframe`

width: 100%;
height: 500px;
`;

export const DescriptionBox = styled.div`

`;

export const VideoTitle = styled.h1`
  font-size: 22px;
  font-weight: bold;
  word-wrap: break-word;
 
`;

export const VideoDescription = styled.p`

margin-top: 40px;
font-size: 18px;
text-align: left;
font-family: sans-serif;
`;

export const VideoList = styled.div`
border: 10px;
padding 5px;
position:relative;
top: -810px;  
float: right;
height: 800px;
width: 39%;  
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
top: 15px;
border-style: outset;
position: static;

`;

export const Image = styled.div`
width:20%;
`;
export const IMG = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
`;
export const TitleBox = styled.div`
margin-top:-25px; 
margin-left: auto; 
margin-right: 0;
width:75%;
overflow-wrap: break-word;

max-width: 100%;
max-height: 100%;
`;

export const TitleVideo = styled.h1`
font-size: 16px;
font-weight: bold;
font-family: Arial, Helvetica, sans-serif;
text-align: ;
overflow-wrap: break-word;

`;
export const FavoriteButton= styled.button`
padding: 5;
border: ;
width: 200px;
top: 45px;
position: relative;
left: 75%;
background: transparent;
`;

export const ButtonLabel = styled.span`

width: 200px;
top: 15px;
position: absolute;
left: 75%;
text-color:black;
text-size:200px;
`;