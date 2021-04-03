import React, {useState}from "react";
import {VideoItems, Parag, TitleVideo, Secondary, IMG} from './components/VideoPlayer.js';
import { useHistory  } from "react-router-dom";



function ListVideos({title, description,url, videoId, videoList, setVideoData}) {
       

      let history = useHistory();
      function  playVideo(event) {
        history.push(`/${videoId}`);
        console.log(title);
        setVideoData({title : title,
            description: description,
            videoId: videoId});
        }
    
    return (
       
        <VideoItems  onClick={playVideo} >
            <div>
            <IMG src={url} alt="video"/>
            </div>
            <Parag>
            <TitleVideo>{title}</TitleVideo>
            </Parag>
           
        </VideoItems>
        
    );
} 

export default ListVideos;