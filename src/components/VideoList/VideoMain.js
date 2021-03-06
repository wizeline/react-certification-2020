import React from "react";

import { Box, BoxImage, BoxInfo, BoxTitle, BoxText } from './styled';

const NoImage = require('./noimage.jpg');
const VideoMain = ({ info }) => {
  return (
    <Box>
      <a href={info.id.videoId}>
        <BoxImage>
        {info.snippet.thumbnails.default?
            (<img className="image" alt="video thumbnail" src={info.snippet.thumbnails.medium.url} />)
            :
            (<img className="image" alt="video thumbnail" src={NoImage} />)
            }
        </BoxImage>
        <BoxInfo>
            <BoxTitle>{info.snippet.title}</BoxTitle>
            <BoxText>{info.snippet.description.substr(0, 170)}</BoxText>
        </BoxInfo>
      </a>
    </Box>
  )};

export default VideoMain; 