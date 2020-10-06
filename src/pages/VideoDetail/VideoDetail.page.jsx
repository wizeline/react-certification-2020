import React from 'react';
import VideoDetailCard from '../../components/VideoDetailCard';
import { useVideoContext } from '../../store/VideoContext';

function VideoDetailPage() {
  const { state } = useVideoContext();
  return (
    <VideoDetailCard
      videoDetailThumbnail={state.currentVideo.videoThumbnail}
      videoDetailTitle={state.currentVideo.videoTitle}
      videoDetailDescription={state.currentVideo.videoDescription}
    />
  );
}

export default VideoDetailPage;
