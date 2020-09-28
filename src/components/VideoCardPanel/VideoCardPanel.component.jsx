import React from 'react';
import VideoCard from '../VideoCard';
import './VideoCardPanel.styles.css';

function VideoCardPanel({ videos }) {
  const getVideoThumbnail = (video) => video.snippet.thumbnails.medium.url;
  const getVideoTitle = (video) => video.snippet.title;
  const getVideoDescription = (video) => video.snippet.description;

  return (
    <div className="video-card-wrapper">
      {videos.map((video) => (
        <VideoCard
          videoId={video.etag}
          videoThumbnail={getVideoThumbnail(video)}
          videoTitle={getVideoTitle(video)}
          videoDescription={getVideoDescription(video)}
        />
      ))}
    </div>
  );
}

export default VideoCardPanel;
