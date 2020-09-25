import React from "react";

import { useYouTubeAPI } from "../../utils/hooks/useYouTube";

import Video from "../Video";

import "./Videos.styles.scss";

const Videos = () => {
  const { videos } = useYouTubeAPI();

  return (
    <div className="component__videos">
      {videos &&
        videos.items.map((item) => (
          <Video
            key={item.id}
            title={item.snippet.title}
            description={item.snippet.description}
          />
        ))}
    </div>
  );
};

export default Videos;
