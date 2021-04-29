import styled from 'styled-components'


export const DropDownContainer = styled.div`
  width: 10.5em;
  margin: 0 auto;
  
`;
export const CircleL = styled.input`
float: right;
right: 90px;
position:absolute;
z-index: 100001 ;
background: white;
background-image: ${props => `url(${props.icon}) `};


@media (min-width: 600px){
    height: 55px;
    width: 55px;
    border-radius: 999999px;
    
margin: .4em; 
  }
`;

export const DropDownListContainer = styled.div`{
  position: absolute;
  width: 130px;
  
  float: right;
  right: 160px;
  top: 16px;
}`;

export const DropDownList = styled.ul`{
  padding: 0;
  position: absolute;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
  &:hover {
    color: grey;
  }
}`;

export const ListItem = styled.li`{
  list-style: none;
  margin-bottom: .5em;
  
  
  
}`;

export const LogInPop = styled.div`{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
 
}`;

export const Form = styled.div`{
  background: white;
  border-radius: 5px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  
}`;

export const IniciarSesion = styled.div`{
  padding: 10px;
  background: white;
 

}`;

export const Label = styled.label`{
  color: black;
}`;

export const UserLabel = styled.div`{
  padding: 10px;
  background: white;
}`;

export const InputUserName = styled.div`{
  background: white;
  color: black;
}`;

export const UserNameInput = styled.input`{
  background: white;
}`;

export const PasswordLabel = styled.div`{
  padding: 5px;
  background: white;
}`;

export const PasswordInput = styled.div`{
  background: white;
}`;

export const SubmitButton = styled.div`{
  padding: 10px;
  background: white;

}`;

export const ButtonJoin = styled.button`{
  background-color: white;
  border: line;
  color: black;
  padding: 10px 22px;
  text-align: center;
  
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}`;