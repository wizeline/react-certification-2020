import React from "react";
import VideoMain from './VideoMain';
import VideoSide from './VideoSide';

const VideoList = ({ items, isLoaded, hasErrors, sideList }) => {

  return (
    <div className= {sideList ?sideList:"container"} > 
      {items ?
        items.map((box, index) => (
          typeof box.id.videoId !== 'undefined' ? 
          (sideList ? 
          <VideoSide info={box} key={index} /> :
          <VideoMain info={box} key={index} />) :""
        )) :
        <span>no data</span>
      }
    </div>
  )};

export default VideoList; 