import React from 'react';

function VideoDetailCard({videoDetailThumbnail, videoDetailTitle, videoDetailDescription, videoId}){
  return (
    <section className="video-detail-wrapper">
      <iframe src={`https://www.youtube.com/embed/${videoId}`} title={videoDetailTitle} />
      <div>{videoDetailThumbnail}</div>
      <div>{videoDetailDescription}</div>
    </section>
  );
}

export default VideoDetailCard;
