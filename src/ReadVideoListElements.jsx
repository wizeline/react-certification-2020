import React, {useContext}from "react";
import {VideoList} from './components/VideoPlayer.js';
import ListVideos from "./ListVideos.jsx";
import SearchContext from './GlobalVars/SearchContext';



function ReadVideoListElements() {
     const {videoList,setVideoList} = useContext(SearchContext);


     return (

        <VideoList>


            {videoList.map((item) => (
     (!document.URL.toString().includes("favorite")) ?
              <ListVideos  key={item.id.videoId}
              videoList={videoList}
              title={item.snippet.title} 
              description={item.snippet.description}
                url={item.snippet.thumbnails.default.url}
               videoId={item.id.videoId}  />
               :
               <ListVideos  key={item.videoId}
              videoList={videoList}
              title={item.title} 
              description={item.description}
                url={item.url}
               videoId={item.videoId}  />

          ))}
          
             



    </VideoList> 
     )
        
    
} 

export default ReadVideoListElements;