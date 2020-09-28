import React, { useContext } from 'react';
import VideoDetailCard from '../../components/VideoDetailCard';
// import RelatedVideos from '../../components/RelatedVideos';
import VideoContext from '../../store/VideoContext';

function VideoDetailPage() {
  const { state } = useContext(VideoContext);
  return (
    <div>
      <VideoDetailCard
        videoDetailThumbnail={state.currentVideo.videoThumbnail}
        videoDetailTitle={state.currentVideo.videoTitle}
        videoDetailDescription={state.currentVideo.videoDescription}
      />
      {/* <RelatedVideos relatedVideos={relatedVideos}> */}
    </div>
  );
}

export default VideoDetailPage;
