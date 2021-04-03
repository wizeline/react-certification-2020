import React, {useState} from 'react';
import Player from "./videoplayer.jsx";
import ReadElements from "./VideoListElements.jsx";
import {Container} from './components/VideoPlayer.js';
import Header from './header.jsx';

function PlayerBody({title, description, videoId, videoList,setValueFinal}){

    const [videoData, setVideoData] = useState({title: title, description: description, videoId: videoId});

    return(
        
        <Container>
            <Player title={videoData.title} description={videoData.description} videoId={videoData.videoId}/>
            <ReadElements setVideoData={setVideoData} videoList={videoList} videoId={videoId}/>
        </Container>
        
    )

}

export default PlayerBody;