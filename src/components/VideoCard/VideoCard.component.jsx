import React from 'react';
import { Link } from 'react-router-dom';
import { useVideoContext } from '../../store/VideoContext';
import {
  VideoCardWrapper,
  LikeButton,
  VideoCardTitle,
  VideoCardHeader,
} from './VideoCardStyles';
import likeIcon from '../../assets/like.svg';

function VideoCard({ videoDescription, videoTitle, videoThumbnail, videoId }) {
  const { dispatch } = useVideoContext();

  const handleVideoClick = () => {
    dispatch({
      type: 'SET_CURRENT_VIDEO',
      payload: {
        videoId,
        videoTitle,
        videoDescription,
        videoThumbnail,
      },
    });
  };

  const handleLike = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_FAVORITE_VIDEO',
      payload: {
        videoId,
        videoTitle,
        videoDescription,
        videoThumbnail,
      },
    });
  };

  return (
    <Link to="/detail" onClick={handleVideoClick}>
      <VideoCardWrapper key={videoId} data-testid="video-card">
        <div className="image-wrapper">
          <img
            className="video-thumbnail"
            src={videoThumbnail}
            data-testid="image"
            alt={videoTitle}
          />
        </div>
        {/* <input className="like-icon" src={likeIcon} type="button" onClick={handleLike} /> */}
        <VideoCardHeader>
          <VideoCardTitle className="video-title">{videoTitle}</VideoCardTitle>
          <LikeButton>
            <input
              className="like-icon"
              src={likeIcon}
              type="image"
              onClick={handleLike}
              alt="like"
            />
          </LikeButton>
        </VideoCardHeader>
        <p className="video-description">{videoDescription}</p>
      </VideoCardWrapper>
    </Link>
  );
}

export default VideoCard;
