
import {Input, Head} from './components/header.js';
import ToggleSwitch from './components/toggleswitch.js';
import Menu from './components/menu.js';
import  Login from './components/login.js';
import React, { useState } from "react";


function Header({setValueFinal}) {
    
    const [value, setValue] = useState("wizeline");

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            submitValue()
        }
      }

      const submitValue = () => {
       console.log(value);
        setValueFinal(value);
    }
   
    return (
            <Head >
            <Menu></Menu>
          
            <Input  placeholder="Search..." 
            value={value} onChange={e => setValue(e.target.value)}
            onKeyDown={handleKeyDown} />
            <ToggleSwitch></ToggleSwitch>
            <Login></Login>
            </Head>    

    )
};

export default Header;