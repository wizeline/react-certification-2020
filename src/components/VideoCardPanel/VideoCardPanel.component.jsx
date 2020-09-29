import React from 'react';
import VideoCard from '../VideoCard';
import './VideoCardPanel.styles.css';

function VideoCardPanel({ videos }) {
  const getVideoThumbnail = (video) => video.snippet ? video.snippet.thumbnails.medium.url : video.videoThumbnail;
  const getVideoTitle = (video) => video.snippet ? video.snippet.title: video.videoTitle;
  const getVideoDescription = (video) => video.snippet ? video.snippet.description: video.videoDescription;

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
