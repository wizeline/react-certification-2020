import styled from 'styled-components'

export const Head = styled.head`
background: #117a65;
color: white;
margin: 0;
height: auto;

  
@media (min-width: 600px){
      flex-direction: row ;
      overflow: hidden;
      display: block;
      width: 100%;
      position: static;
    }
`;

export const Input = styled.input`
    float:left;
    results="0"
    alignItems: "stretch",
    background-image: url('images/microphone.png'),
    background-repeat: no-repeat,
    background-position: right,
    display: "flex",
    flex-wrap: wrap;
    border: none;
    background-color: #074b3d;
    display: flex;
    size: normal;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: .75em ;
    margin: 1em;  
    color: white;
    opacity: 0.5;
    @media (min-width: 600px){
      width: 15%;
      flex-direction: row ;
    }
    ::placeholder {
      color: white;
    `;

  
   
    

    

    
