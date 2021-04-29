import React, { useState, useContext } from "react";
import {CircleL, DropDownContainer, DropDownListContainer, DropDownList, ListItem, LogInPop, Form, IniciarSesion, UserLabel, InputUserName, PasswordLabel, PasswordInput, SubmitButton, ButtonJoin,UserNameInput, Label   } from '../styled/LoginMenu';
import LoginApi from '../mock/MockedUser';
import SearchContext from '../GlobalVars/SearchContext';

function Login(){

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLogIn, setIsOpenLogIn] = useState(false);
  
  const LogInButton = () => setIsOpen(!isOpen);
  const LogInForm = () => {
    setIsOpenLogIn(!isOpenLogIn)
  
    if (localStorage.getItem('session') != null) {
      localStorage.removeItem("session");
      //localStorage.clear();
    }

  
  };
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {avatarUrl, setAvatarUrl} = useContext(SearchContext);

  const renderLabelSession = () => {
    if (localStorage.getItem('session') != null) {
      
      return "Cerrar Sesion"
    }else{
      return "Iniciar Sesion"
    }
  }



  const handleSubmit = (evt) => {
    evt.preventDefault();
   
  var result =  LoginApi(`${username}`, `${password}`).then(function(result) {
   
    
      setIsOpenLogIn(false);
      setIsOpen(false);
      localStorage.setItem('session',true);
      setAvatarUrl(result.avatarUrl); 
    


  }).catch(function(result) {
   
    alert("result.avatarUrl");
   
  });;

  console.log("mock result "+result);
    
  if (localStorage.getItem('session') != null) {
    setAvatarUrl('https://img.icons8.com/cotton/64/000000/user-female--v6.png'); 
   
  }
}

return(
  <DropDownContainer>
    <CircleL type="button" onClick= {LogInButton} icon={avatarUrl}></CircleL>
    {isOpen && (
      <DropDownListContainer>
        <DropDownList>
        <ListItem onClick = {LogInForm}>{renderLabelSession()}</ListItem>
        {isOpenLogIn && localStorage.getItem('session') == null && (
          <LogInPop>
            <Form>
              <form onSubmit={handleSubmit} >
              <IniciarSesion>
              <h1>Iniciar Sesion</h1>
              </IniciarSesion>
              
              <UserLabel>
              <Label ><b>Username</b></Label>
              </UserLabel>
              <InputUserName>
              <UserNameInput type="text"  value={username}
          onChange={e => setUsername(e.target.value)} />
              </InputUserName>     
              <PasswordLabel>
                <Label for="psw"><b>Password</b></Label>
              </PasswordLabel>
              <PasswordInput>
              <UserNameInput type="password" value={password}
          onChange={e => setPassword(e.target.value)} />
              </PasswordInput>
              <SubmitButton>
              <ButtonJoin type="submit">Entrar</ButtonJoin>
              </SubmitButton>
              </form>
                        
            </Form>

          </LogInPop>

        )}
        </DropDownList>
      </DropDownListContainer>

    )}
  </DropDownContainer>

);
}
export default Login;