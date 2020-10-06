import React, { useReducer, useContext } from 'react';
import videoReducer from './VideoReducer';

const VideoContext = React.createContext({
  videos: [],
  currentVideo: {},
  favoriteVideos: [],
});

export const useVideoContext = () => useContext(VideoContext);

function VideosProvider({ children }) {
  const [state, dispatch] = useReducer(videoReducer, {
    currentVideo: {},
    favoriteVideos: [],
    videos: [],
  });

  return (
    <VideoContext.Provider value={{ state, dispatch }}>{children}</VideoContext.Provider>
  );
}

export default VideosProvider;
