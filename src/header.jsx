
import {Input, Head} from './components/header.js';
import ToggleSwitch from './components/toggleswitch.js';
import Menu from './components/menu.js';
import  Login from './components/login.js';
import React, { useState } from "react";
import { useContext } from 'react';
//import ThemeContext from './ThemeContext';
import SearchContext from './SearchContext';
import Switch from './components/switch'
//import {checked} from './components/Functions.js';


function Header() {
        
    const [value, setValue] = useState("wizeline");

    const { valueFinal, setValueFinal } = useContext(SearchContext);
    

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            submitValue();
           // console.log(value);
        }
      }

      const submitValue = () => {
        setValueFinal(value);
        console.log(valueFinal);
    }
   
    return (
            <Head>
            <Menu></Menu>
          
            <Input  placeholder="Search..." 
            value={value} onChange={e => setValue(e.target.value)}
            onKeyDown={handleKeyDown} />
            <Switch  ></Switch>
            <Login></Login>
            </Head>    

    )
};

export default Header;