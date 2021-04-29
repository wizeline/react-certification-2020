import React, { useContext } from "react";
import Context from "../components/Context";
import styled from "styled-components";

const Container = styled.label`
right: 10px;
margin:20px 200px 0px 0px;
position:absolute;

@media (min-width: 600px){
  
  flex-direction: row ;
  
}
`;

const Slider = styled.span`
  position: absolute;
  top: 0    ;
  right:100px;
  display: block;
  cursor: pointer;
  background-color: grey;
  width: 50%;
  height: 140%;
 top:-5px;
  border-radius: 30px;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    margin: 4px;
    background-color: white;
    border-radius: 50%;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  

  &:checked + ${Slider} {
    background-color: #4b5d67;
  }

  &:checked + ${Slider}::before {
    -webkit-transform: translateX(260px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
    background-color: grey   ;
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #black;
  }
`;

const Label = styled.label`
float: right;
top:100px;
font-family: sans-serif;
@media (min-width: 600px){
  font-size: 18px;
  margin: .1em;
  margin-left: 18px;
}
`;

const Switch = () => {
  const { dispatch } = useContext(Context);

  const handleOnClick = () => {
    // Dispatch action
    dispatch({ type: "TOGGLE_DARK_MODE" });
  };

  return (
    <Container>
    <Label>Dark Mode!</Label>
      <Input type="checkbox" onClick={handleOnClick} />
      <Slider />
    </Container>
  );
};

export default Switch;
