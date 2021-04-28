import React, { useReducer, useState} from 'react';
import Header from './header.jsx';
import Body from './body.jsx';
import './styled/HomeView.css';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import PlayerBody from './PlayerBody.jsx';
import {Container} from './components/HomePage.js';
import SearchContext from './GlobalVars/SearchContext';
import { ThemeProvider,createGlobalStyle } from "styled-components";
import { light, dark } from "./themes";
import  reducer from './components/Reducer';
import Context from './components/Context';
import FavoriteListPage from './FavoriteListPage';




export const GlobalStyles = createGlobalStyle`
head,input{
    background: ${({ theme }) => theme.backgroundheader};
    background: ${({ theme }) => theme.backgroundheaderinput};
    
  }  
body,div,h1, #root {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text}; 
  }
  *{
    margin:0; padding:0; box-sizing:border-box;
  }
 
`;



function Main(){

    const [valueFinal, setValueFinal] = useState('wizeline');
    const [titles, setTitles] = useState({title: "", description: "", videoId: "", url: ""});
    const [videoList, setVideoList] = useState([]);
    const [favoriteItems, setFavoriteItems] = useState([]);
    const [labelState, setLabelState] = useState('Agregar a favoritos');
    const [avatarUrl, setAvatarUrl] = useState('https://img.icons8.com/cotton/64/000000/user-female--v6.png');
    const [state, dispatch] = useReducer(reducer, {
        isDark: false
    }); 
    
    console.log("valor de la sesion "+localStorage.getItem('session'));
    console.log("Array de elementos "+localStorage.getItem('data'));
    console.log("Favorite list array -> " + JSON.stringify(favoriteItems));
    return(
        
        <Context.Provider value={{ state, dispatch } }>
    <ThemeProvider theme={state.isDark ? dark : light}>
    <GlobalStyles />
        <SearchContext.Provider value={{ valueFinal, setValueFinal, titles, setTitles, videoList, setVideoList, favoriteItems, setFavoriteItems, labelState, setLabelState, avatarUrl, setAvatarUrl} }>
        
        
    <Container>
    
        <BrowserRouter>
                <Header/>
            
            <Switch>
                <Route exact path="/" render={(props) => <Body />}/>
                <Route exact path="/favorite" render={(props) => <FavoriteListPage />}/>   
                <Route exact path="/:videoId" render={(props) => <PlayerBody />}/>
                <Route exact path="/favorite/:videoId" render={(props) => <PlayerBody />}/>
               
            </Switch>         
      
        </BrowserRouter>
        
        </Container>
        
        
        </SearchContext.Provider>
        </ThemeProvider>
        </Context.Provider>
        
    )
}

export default Main;