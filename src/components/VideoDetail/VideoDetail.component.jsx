import React from "react";

import { useAuth } from "../../providers/Auth";
import { FAVORITES_KEY } from "../../utils/constants";
import { storage } from "../../utils/storage";

const VideoDetail = ({ video }) => {
  const { authenticated } = useAuth();

  if (!video) {
    return <div>Loading ...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  const onAddFavorites = () => {
    const lastFavorites = storage.get(FAVORITES_KEY) || "[]";
    const favorites = JSON.parse(lastFavorites);
    favorites.push(video);
    const newFavorites = favorites.filter(
      (favorite, index, self) =>
        index === self.findIndex((f) => f.id.videoId === favorite.id.videoId)
    );
    storage.set(FAVORITES_KEY, JSON.stringify(newFavorites));
  };

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
        <div className="content">
          <h4>{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
        <div className="favorites">
          {authenticated && (
            <button type="submit" onClick={onAddFavorites}>
              Add to favorites
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
