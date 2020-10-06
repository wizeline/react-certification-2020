const VideoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_VIDEO': {
      console.log('SET_CURRENT_VIDEO');
      return { ...state, currentVideo: action.payload };
    }
    case 'ADD_FAVORITE_VIDEO': {
      console.log('ADD_FAVORITE');
      const videoExists = () => {
        return state.favoriteVideos.find((video) => {
          return action.payload.videoId === video.videoId;
        });
      };
      const videosIsNotEmpty = () => state.favoriteVideos.length !== 0;
      if (videosIsNotEmpty() && videoExists()) {
        console.log('video ya existe!', state.favoriteVideos);
        return {
          ...state,
          favoriteVideos: state.favoriteVideos,
        };
      }
      localStorage.setItem(
        'videos',
        JSON.stringify(state.favoriteVideos.concat(action.payload))
      );
      return {
        ...state,
        favoriteVideos: state.favoriteVideos.concat(action.payload),
      };
    }
    case 'LOAD_FROM_STORAGE': {
      const videos = JSON.parse(localStorage.getItem('videos'));
      return {
        ...state,
        favoriteVideos: state.favoriteVideos.concat(videos),
      };
    }
    default:
      return state;
  }
};

export default VideoReducer;
