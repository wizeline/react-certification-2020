import React, {useState, useContext}from "react";
import {VideoItems, Parag, TitleVideo, Secondary, IMG} from './components/Body.js';
import Player from "./videoplayer.jsx";
import { useHistory  } from "react-router-dom";
//import ThemeContext  from '../src/ThemeContext';

function VideoItem({title, description,url,videoId, setTitles, setVideoList,searchResults}) {
    
    //const [results, setResults] = React.useState([]);
   // const {darkMode} = useContext(ThemeContext);

    // const themeStyles = {
    //     backgroundColor: darkMode ? '#333' : 'white',
    //     color: darkMode ? '#CCC' : '#333'
    // }

      let history = useHistory();
      function  handleLogin(event) {
        history.push(`/${videoId}`);
        console.log(title);
        console.log(setTitles({title : title,
            description: description,
            videoId: videoId,
            }));
            setVideoList(searchResults);
        }
    

    return (
       
        <VideoItems  onClick={handleLogin} >
            <div>
            <IMG src={url} alt="video"/>
            </div>
            <Parag >
            <TitleVideo>{title}</TitleVideo>
            <Secondary>{description}</Secondary>
            </Parag>
            
        </VideoItems>
        
    );
} 

export default VideoItem;