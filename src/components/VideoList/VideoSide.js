import React from "react";

import { BoxSide, BoxImageSide, BoxInfoSide, BoxTitleSide } from './styled';

const NoImage = require('./noimage.jpg');
const VideoSide = ({ info }) => {

  return (
    <BoxSide>
      <a href={info.id.videoId}>
        {info.snippet.thumbnails.default?
            (<BoxImageSide alt="video thumbnail" src={info.snippet.thumbnails.medium.url} />)
            :
            (<BoxImageSide alt="video thumbnail" src={NoImage} />)
        }
        <BoxInfoSide>
            <BoxTitleSide>{info.snippet.title}</BoxTitleSide>
        </BoxInfoSide>
      </a>
    </BoxSide>
  )};

export default VideoSide; 