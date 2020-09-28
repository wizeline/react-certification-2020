import React from 'react';

const VideoContext = React.createContext({
  videos: [],
  currentVideo: {},
  setCurrentVideo: () => {},
  favoriteVideos: [],
});

export default VideoContext;
