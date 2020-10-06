import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import VideoContext from '../../store/VideoContext';
import { VideoCardWrapper } from './VideoCardStyles';
import likeIcon from '../../assets/like.svg';

function VideoCard({ videoDescription, videoTitle, videoThumbnail, videoId }) {
  const { dispatch } = useContext(VideoContext);

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
      <VideoCardWrapper key={videoId}>
        <div className="image-wrapper">
          <img className="video-thumbnail" src={videoThumbnail} alt={videoTitle} />
        </div>
        <input className="like-icon" src={likeIcon} type="button" onClick={handleLike} />
        <h2 className="video-title">{videoTitle}</h2>
        <p className="video-description">{videoDescription}</p>
      </VideoCardWrapper>
    </Link>
  );
}

export default VideoCard;
