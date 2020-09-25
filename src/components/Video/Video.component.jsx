import React from "react";

import "./Video.styles.scss";

const Video = ({ title }) => {
  return (
    <div className="component__video">
      <h1>{title}</h1>
    </div>
  );
};

export default Video;
