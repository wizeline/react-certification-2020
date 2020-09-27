import React from "react";
import { useParams } from "react-router";

import VideoDetail from "../../components/VideoDetail";

const Video = ({ video }) => {
  const { id } = useParams();
  return (
    <section className="video-detail">
      <VideoDetail id={id} video={video} />
      {console.log({ id })}
      {console.log({ video })}
    </section>
  );
};

export default Video;
