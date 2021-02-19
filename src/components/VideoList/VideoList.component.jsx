import React from "react";
import { Container, Box, BoxImage, BoxInfo, BoxTitle, BoxText } from './styled';

const NoImage = require('./noimage.jpg');
const VideoList = ({ items }) => {
  return (
    <Container>
      {items.map(box => (
        <Box key={box.id}>
          <BoxImage>
          {box.snippet.thumbnails.default?
            (<img className="image" alt="user" src={box.snippet.thumbnails.default.url} />)
            :
            (<img className="image" alt="user" src={NoImage} />)
            }
          </BoxImage>
          <BoxInfo>
            <BoxTitle>{box.snippet.title}</BoxTitle>
            <BoxText>{box.snippet.description.substr(0, 90)} ...</BoxText>
          </BoxInfo>
        </Box>
      ))}
    </Container>
  )};

export default VideoList; 