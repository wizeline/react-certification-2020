import React from "react";
import {VideoItems, Parag, TitleVideo, Secondary, IMG} from './Body.js';

function VideoItem({title, description,url}) {
    return (
        <VideoItems>
            <div>
            <IMG src={url} alt="video"/>
            </div>
            <Parag>
            <TitleVideo>{title}</TitleVideo>
            <Secondary>{description}</Secondary>
            </Parag>
            
        </VideoItems>
    );
} 

export default VideoItem;