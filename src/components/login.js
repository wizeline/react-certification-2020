import styled from 'styled-components'

function Login(){

const CircleL = styled.div`
float: right;
right: 90px;
position:absolute;
background-image: url("https://amymhaddad.s3.amazonaws.com/morocco-blue.png");
background-color: black;
opacity: 0.5;
@media (min-width: 600px){
    height: 35px;
    width: 35px;
    border-radius: 999999px;
    padding: .4em ;
margin: .4em; 
  }



`;
return(
    
    <CircleL></CircleL>
)

};
export default Login;