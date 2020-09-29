import React from 'react';

const VideoContext = React.createContext({
  videos: [],
  currentVideo: {},
  setCurrentVideo: () => {},
  favoriteVideos: [],
  addFavoritevideo: () => {},
  loadFromStorage: () => {},
});

export default VideoContext;
