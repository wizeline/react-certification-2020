import React, { useContext, useEffect } from 'react';
import VideoCardPanel from '../../components/VideoCardPanel';
import VideoContext from '../../store/VideoContext';

function FavoriteVideoPage() {
  const { state, dispatch } = useContext(VideoContext);
  useEffect(() => {
    dispatch({
      type: 'LOAD_FROM_STORAGE',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="favorites-wrapper">
      <h1>Favoritos</h1>
      {state.favoriteVideos && <VideoCardPanel videos={state.favoriteVideos} />}
    </div>
  );
}

export default FavoriteVideoPage;
