import React from 'react';
import VideoCard from '../VideoCard';

function RelatedVideos({ relatedVideos }) {
  return (
    <div className="related-videos-wrapper">
      {relatedVideos.map((video) => (
        <VideoCard
          videoThumbnail={video.thumbnail}
          videoTitle={video.videoTitle}
          videoDescription={video.videoDescription}
        />
      ))}
    </div>
  );
}

export default RelatedVideos;
