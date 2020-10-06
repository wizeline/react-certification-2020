import React, { useEffect } from 'react';
import styled from 'styled-components';
import VideoCardPanel from '../../components/VideoCardPanel';
import { useVideoContext } from '../../store/VideoContext';

const FavoritesTitle = styled.h1`
  padding-left: 26px;
`;

function FavoriteVideoPage() {
  const { state, dispatch } = useVideoContext();
  useEffect(() => {
    dispatch({
      type: 'LOAD_FROM_STORAGE',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="favorites-wrapper">
      <FavoritesTitle>Favorites</FavoritesTitle>
      {state.favoriteVideos && <VideoCardPanel videos={state.favoriteVideos} />}
    </div>
  );
}

export default FavoriteVideoPage;
