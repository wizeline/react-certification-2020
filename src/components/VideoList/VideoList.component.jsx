import React from "react";
import VideoMain from './VideoMain';
import VideoSide from './VideoSide';
import { useVideoSearch } from '../../providers/VideoSearch';
const VideoList = ({ sideList }) => {

  const {
    items,
    search,
    selectedVideo,
    setSelectedVideo,
    setRelatedVideos
  } = useVideoSearch();
  
  const handleVideoSelected = async (video) => {
    setSelectedVideo(video);
    console.log(video);
      try {
        const res = await fetch(`${process.env.REACT_APP_YOUTUBE_SEARCH}?q=${search}&part=id&part=snippet&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
        const json = await res.json();
        console.log(json);
        setRelatedVideos(json.items);
      } catch (error) {
        setRelatedVideos(null);
      }
  };

  return (
    <div className= {sideList ? sideList : "container" } > 
      {items ?
        items.map((item, index) => (
          typeof item.id.videoId !== 'undefined' ? 
          (sideList ? 
          <VideoSide info={item} key={index} handleVideoSelected={handleVideoSelected} /> :
          <VideoMain info={item} key={index} handleVideoSelected={handleVideoSelected} />) :""
        )) :
        <span>no data</span>
      }
    </div>
  )};

export default VideoList; 