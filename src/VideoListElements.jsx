import React, {useState}from "react";
import {VideoList} from './components/VideoPlayer.js';
import { useHistory  } from "react-router-dom";
import ListVideos from "./ListVideos.jsx";



function ReadElements({ videoList, setVideoData}) {
       

     return (
        <VideoList>               
            {videoList.map((item) => (
              <ListVideos  key={item.id.videoId}
              setVideoData={setVideoData}
              videoList={videoList}
              title={item.snippet.title} 
              description={item.snippet.description}
                url={item.snippet.thumbnails.default.url}
               videoId={item.id.videoId}  />
          ))}
                        
    </VideoList> 
     )
        
    
} 

export default ReadElements;