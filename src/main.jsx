import React, {useState} from 'react';
import Header from './header.jsx';
import Body from './body.jsx';
import './css/HomeView.css';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import PlayerBody from './PlayerBody.jsx';
import ListVideos from './ListVideos.jsx';
import {Container} from './components/HomePage.js';

function Main(){

    const [valueFinal, setValueFinal] = useState('wizeline');
    const [titles, setTitles] = useState({title: "", description: "", videoId: ""});
    const [videoList, setVideoList] = useState([]);
    

    return(
    <Container>
        <BrowserRouter>
        
                <Header setValueFinal={setValueFinal} />
            
            <Switch>
                <Route exact path="/" render={(props) => <Body setTitles={setTitles} setVideoList={setVideoList} valueFinal={valueFinal} />}/>
                <Route path="/:videoId" render={(props) => <PlayerBody title={titles.title} description={titles.description} videoId={titles.videoId} videoList={videoList} valueFinal={valueFinal}/>}>
                    
                </Route>
            </Switch>         
            
       
        </BrowserRouter>
        </Container>
    )
}

export default Main;