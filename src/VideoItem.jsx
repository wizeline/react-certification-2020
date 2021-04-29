import React, {useState, useContext}from "react";
import {VideoItems, Parag, TitleVideo, Secondary, IMG, ImgBox} from './components/Body.js';
import Player from "./videoplayer.jsx";
import { useHistory  } from "react-router-dom";
import SearchContext from './GlobalVars/SearchContext';
//import ThemeContext  from '../src/ThemeContext';

function VideoItem({title, description,url,videoId, setTitles,searchResults}) {

    const {videoList,setVideoList} = useContext(SearchContext);
   
      let history = useHistory();
      function  handleLogin(event) {
        
        
            if(!document.URL.toString().includes("favorite"))
            {
                
                history.push(`/${videoId}`);
                
                console.log(setTitles({title : title,
                    description: description,
                    videoId: videoId,
                    url: url
                    }));
                    setVideoList(searchResults);
               
                 

            }else{

                history.push(`/favorite/${videoId}`);


                
                var myArray = [];
                Object.entries(localStorage).map(([key,value]) => {

                    if((key !="session"  )){
                    var elementJson = JSON.parse(value);
                    myArray.push(elementJson);
                    }
                }
                    
                    

                );
                setVideoList(myArray);
                console.log(setTitles({title : title,
                    description: description,
                    videoId: videoId,
                    url: url
                    }));

        }
    }
    

    return (
       
        <VideoItems  onClick={handleLogin} >
            <ImgBox>
                <IMG src={url} alt="video"/>
            </ImgBox>
            <Parag >
                <TitleVideo>{title}</TitleVideo>
                <Secondary>{description}</Secondary>
            </Parag>
            
        </VideoItems>
        
    );
} 

export default VideoItem;