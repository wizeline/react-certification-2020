
import {Input, Head} from './components/header.js';
import ToggleSwitch from './components/toggleswitch.js';
import Menu from './components/menu.js';
import  Login from './components/login.js';
import React, { useState } from "react";
import { useContext } from 'react';
import ThemeContext from './ThemeContext';
//import {checked} from './components/Functions.js';


function Header() {
        
    const [value, setValue] = useState("wizeline");

    const { setValueFinal } = useContext(ThemeContext);
    

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            submitValue()
        }
      }

      const submitValue = () => {
        setValueFinal(value);
    }
   
    return (
            <Head>
            <Menu></Menu>
          
            <Input  placeholder="Search..." 
            value={value} onChange={e => setValue(e.target.value)}
            onKeyDown={handleKeyDown} />
            <ToggleSwitch  ></ToggleSwitch>
            <Login></Login>
            </Head>    

    )
};

export default Header;