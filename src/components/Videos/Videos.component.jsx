import React from "react";
import { Link } from "react-router-dom";

import { VideoCard, VideoCardHeader, VideoCardList } from "./VideoCard";

import "./Videos.styles.scss";

const Videos = ({ onSetActiveVideo, videos }) => {
  return (
    <div className="component__videos">
      <VideoCardList>
        {videos &&
          videos.items &&
          videos.items.map((item) => (
            <Link
              to={`/videos/${item.id.videoId}`}
              onClick={() => onSetActiveVideo(item)}
            >
              <VideoCard>
                <img
                  src={item.snippet.thumbnails.medium.url}
                  alt={item.snippet.title}
                />
                <VideoCardHeader>
                  <h2>{item.snippet.title}</h2>
                  <p>{item.snippet.description}</p>
                </VideoCardHeader>
              </VideoCard>
            </Link>
          ))}
      </VideoCardList>
    </div>
  );
};

export default Videos;
