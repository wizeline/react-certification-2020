import React from 'react';
import VideoCard from '../VideoCard';
import { VideoCardPanelWrapper } from './VideoCardPanelStyles';

function VideoCardPanel({ videos }) {
  const getVideoThumbnail = (video) =>
    video.snippet ? video.snippet.thumbnails.medium.url : video.videoThumbnail;
  const getVideoTitle = (video) =>
    video.snippet ? video.snippet.title : video.videoTitle;
  const getVideoDescription = (video) =>
    video.snippet ? video.snippet.description : video.videoDescription;
  return (
    <VideoCardPanelWrapper>
      {videos.map((video) => (
        <VideoCard
          key={video.etag}
          videoId={video.etag}
          videoThumbnail={getVideoThumbnail(video)}
          videoTitle={getVideoTitle(video)}
          videoDescription={getVideoDescription(video)}
        />
      ))}
    </VideoCardPanelWrapper>
  );
}

export default VideoCardPanel;
