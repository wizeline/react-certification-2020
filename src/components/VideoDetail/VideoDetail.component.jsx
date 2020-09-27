import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading ...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="component__video-detail">
      <iframe
        width="800"
        height="450"
        src={videoSrc}
        allowFullScreen
        title="Video player"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      />
      <div className="video-detail-summary">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
