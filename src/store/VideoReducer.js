const VideoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_VIDEO':
      return { ...state, currentVideo: action.payload };
    case 'ADD_FAVORITE_VIDEO': {
      localStorage.setItem(
        'videos',
        JSON.stringify(state.favoriteVideos.concat(action.payload))
      );
      const videoExists = () =>
        state.favoriteVideos.find((video) => {
          return action.payload.videoId === video.videoId;
        });
      const newVideos = () =>
        videoExists()
          ? state.favoriteVideos
          : state.favoriteVideos.concat(action.payload);
      return {
        ...state,
        favoriteVideos: newVideos(),
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
