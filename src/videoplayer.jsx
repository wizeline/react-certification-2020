import React, {useContext} from "react";
import {Video, VideoPlayer,DescriptionBox, VideoDescription, VideoTitle, PlayBox } from './components/VideoPlayer.js';
import SearchContext from './GlobalVars/SearchContext';
import ButtonAddRemFavorite from './ButtonAddRemFavorite';

function Player(){

    const {titles} = useContext(SearchContext);
    
    
    
    return (   
        
            <Video>
                <PlayBox>
                <VideoPlayer src={`https://www.youtube.com//embed/${titles.videoId}`}/>  
                </PlayBox>          
                <DescriptionBox>
                <ButtonAddRemFavorite />
                    <VideoTitle>{titles.title}</VideoTitle>
                    <VideoDescription>{titles.description}</VideoDescription> 
                </DescriptionBox>
                
            </Video>        
       
    )
};

export default Player;