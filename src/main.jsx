import React, {createContext, useReducer, useState} from 'react';
import Header from './header.jsx';
import Body from './body.jsx';
import './css/HomeView.css';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import PlayerBody from './PlayerBody.jsx';
import ListVideos from './ListVideos.jsx';
import {Container} from './components/HomePage.js';
import SearchContext from '../src/SearchContext';
import { ThemeProvider,createGlobalStyle } from "styled-components";
import { light, dark } from "./themes";

import  reducer from './components/Reducer';
import Context from './components/Context';


export const GlobalStyles = createGlobalStyle`
  body,div,h1, #root {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
   
  }
`;

function Main(){

    const [valueFinal, setValueFinal] = useState('wizeline');
    const [titles, setTitles] = useState({title: "", description: "", videoId: ""});
    const [videoList, setVideoList] = useState([]);
    const [state, dispatch] = useReducer(reducer, {
        isDark: false
    }); 
   
    

    return(
        
        <Context.Provider value={{ state, dispatch } }>
    <ThemeProvider theme={state.isDark ? dark : light}>
    <GlobalStyles />
        <SearchContext.Provider value={{ valueFinal, setValueFinal } }>
        
    <Container>
    
        <BrowserRouter>
                <Header/>
            
            <Switch>
                <Route exact path="/" render={(props) => <Body setTitles={setTitles} setVideoList={setVideoList} />}/>
                <Route path="/:videoId" render={(props) => <PlayerBody title={titles.title} description={titles.description} videoId={titles.videoId} videoList={videoList}/>}>
                    
                </Route>
            </Switch>         
      
        </BrowserRouter>
        
        </Container>
        
        </SearchContext.Provider>
        </ThemeProvider>
        </Context.Provider>
        
    )
}

export default Main;