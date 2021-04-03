import React from "react";
import {Video, VideoPlayer,DescriptionBox, VideoDescription, VideoTitle, PlayBox } from './components/VideoPlayer.js';



function Player({title, description, videoId,videoList}){
      

    return (
        
        
            <Video>
                <PlayBox>
                <VideoPlayer src={`https://www.youtube.com//embed/${videoId}`}/>  
                </PlayBox>
                             
                <DescriptionBox>
                    <VideoTitle>{title}</VideoTitle>
                    <VideoDescription>{description}</VideoDescription>
                </DescriptionBox>
            </Video>
            
                

        
       
    )
};

export default Player;