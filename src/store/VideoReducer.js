const VideoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_VIDEO':
      return { ...state, currentVideo: action.payload };
    case 'ADD_FAVORITE_VIDEO':
      return {
        ...state,
        favoriteVideos: state.favoriteVideos.concat(action.payload),
      };
    default:
      return state;
  }
};

export default VideoReducer;
