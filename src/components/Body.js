import styled from 'styled-components'


export const Container = styled.div`
border: 10px ;
display: static;
justify-content: center;
margin-top: 0px;
`;

    export const Title = styled.h1`
        
  
    font-family: sans-serif;    
    @media (min-width: 600px){
      margin-bottom: 25px;
      margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    font-size: 70px;
    justify-content: center;
    text-align-last: center;
    }
        
    `;
    export const Vid = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
    opacity: 10;
 
    `;

    export const VideoItems = styled.div`
    flex: ${props => props.ratio};
    height: 400px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px;
  flex-basis: calc(20% - 22px);
  cursor: pointer;
  padding: 9px 10px;
    `;

    export const Parag = styled.div`
    margin-top: 70px;
  font-size: 18px;
  white-space: pre-line;
  text-align: left;
  font-family: sans-serif;
  word-break: break-all;
  white-space: pre-line;
  text-align-last: left;
}
  
    `;

    export const ImgBox = styled.div`
    display: block;
    
   width: 300px;
    height: 100px;
    
    `;
    export const IMG = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width:100%;
    background-size: contain;  
    `;
    export const TitleVideo = styled.p`
    font-size: 20px;
  font-weight: bold;
  padding: 10px;
  text-align-last: left;
  }
  
    `;

    export const Secondary = styled.p`
    font-size: 16px;
  overflow:hidden;
  padding: px;
  
  @media (min-width: 600px){
  
  }
    `;
    
   
