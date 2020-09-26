import React from "react";

import { useYouTubeAPI } from "../../utils/hooks/useYouTube";

import { VideoCard, VideoCardHeader, VideoCardList } from "./VideoCard";

import "./Videos.styles.scss";

const Videos = () => {
  const { videos } = useYouTubeAPI();

  return (
    <div className="component__videos">
      <VideoCardList>
        {videos &&
          videos.items.map((item) => (
            <VideoCard>
              <img src={item.snippet.thumbnails.medium.url} alt="imagedw" />
              <VideoCardHeader>
                <h2>{item.snippet.title}</h2>
                <p>{item.snippet.description}</p>
              </VideoCardHeader>
            </VideoCard>
          ))}
      </VideoCardList>
    </div>
  );
};

export default Videos;
