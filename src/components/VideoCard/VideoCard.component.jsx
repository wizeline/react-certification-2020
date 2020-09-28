import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import EmployeeContext from '../../store/VideoContext';

function VideoCard({ videoDescription, videoTitle, videoThumbnail, videoId }) {
  const { dispatch } = useContext(EmployeeContext);

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

  return (
    <Link to="/detail" onClick={handleVideoClick}>
      <section className="video-section" key={videoId}>
        <div className="video-title">{videoTitle}</div>
        <div className="video-description">{videoDescription}</div>
        <img className="video-thumbnail" src={videoThumbnail} alt={videoTitle} />
      </section>
    </Link>
  );
}

export default VideoCard;
