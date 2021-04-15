import React, { useContext, useReducer } from 'react'
import styled from 'styled-components'
import Context from '../components/Context';
//import {initialState, reducer} from '../components/Reducer';

function ToggleSwitch() {
 
 // const{currentTheme} = state;
const {dispatch } = useContext(Context);
  
 //true is darkMode
//   function change(){
    
//     if(document.getElementById("checkbox").checked == true){  
//       setDarkMode(true);
//       dispatch({type: "dark"});
//       alert();
      
//   }else{
//     setDarkMode(false);
//     dispatch({type: "light"});
//   }
// };

const change = () => {
  
 dispatch({ type: "TOGGLE_DARK_MODE" });
 console.log("HOLA" +document.getElementById("checkbox").checked);
 };
  
const CheckBoxWrapper = styled.div`
    right: 10px;
    margin:20px 200px 0px 0px;
    position:absolute;
    @media (min-width: 600px){
      
      flex-direction: row ;
      
    }
`;
 const CheckBoxLabel = styled.label`
  float: left;
  right: 10px;
  left: 0;
  
  @media (min-width: 600px){
  width: 42px;
  height: 26px;
  flex-wrap: wrap;
  }
  border-radius: 15px;
  background: #c5d8e1;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  position:absolute;
  right: 10px;
  z-index: 1;
  @media (min-width: 600px){
    border-radius: 15px;
    width: 42px;
    height: 26px;
  }
 
  &:checked + ${CheckBoxLabel} {
    background: #334553;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

const Label = styled.label`
float: right;

font-family: sans-serif;
@media (min-width: 600px){
  font-size: 18px;
  margin: .1em;
  margin-left: 21px;
}
`;

        return (
            <CheckBoxWrapper>
            <Label>Dark Mode!</Label>
            <CheckBox id="checkbox" type="checkbox" onClick={change}/>
            <CheckBoxLabel htmlFor="checkbox" ></CheckBoxLabel>
            </CheckBoxWrapper>
            
        )
    };

    export default ToggleSwitch;     
