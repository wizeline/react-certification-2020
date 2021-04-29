import {Input, Head} from './components/header.js';
import Menu from './components/menu.js';
import  Login from './components/login.js';
import React, { useState } from "react";
import { useContext } from 'react';
import SearchContext from './GlobalVars/SearchContext';
import Switch from './components/switch'
import { useHistory } from "react-router-dom";

function Header() {
        
    const [value, setValue] = useState("wizeline");
    const { setValueFinal } = useContext(SearchContext);
    
    const history = useHistory();
    

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            SubmitValue();
           console.log("enter");
                   }
      }

      function SubmitValue ()  {
           
            setValueFinal(value);
            history.push("");
            
          };
               
   
    return (
            <Head>
            <Menu ></Menu>
          
            <Input  placeholder="Search..." 
            value={value} onChange={e => setValue(e.target.value)}
            onKeyDown={handleKeyDown} />
            <Switch  ></Switch>
            <Login />
            </Head>    

    )
};

export default Header;