import React, {useState} from 'react';
import Header from './header.jsx';
import Body from './body.jsx';
import './css/HomeView.css';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import PlayerBody from './PlayerBody.jsx';
import ListVideos from './ListVideos.jsx';
import {Container} from './components/HomePage.js';
import { useContext } from 'react';
import ThemeContext from '../src/ThemeContext'


function Main(){

    const [valueFinal, setValueFinal] = useState('wizeline');
    const [titles, setTitles] = useState({title: "", description: "", videoId: ""});
    const [videoList, setVideoList] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    // function toggleTheme() {
    //     setDarkMode(prevDarkMode => !prevDarkMode)
    // }
    

    return(
    <Container>
        <BrowserRouter>
        <ThemeContext.Provider value={{ darkMode, setDarkMode, valueFinal, setValueFinal } }>
                <Header/>
            
            <Switch>
                <Route exact path="/" render={(props) => <Body setTitles={setTitles} setVideoList={setVideoList} />}/>
                <Route path="/:videoId" render={(props) => <PlayerBody title={titles.title} description={titles.description} videoId={titles.videoId} videoList={videoList}/>}>
                    
                </Route>
            </Switch>         
            </ThemeContext.Provider>
       
        </BrowserRouter>
        </Container>
    )
}

export default Main;