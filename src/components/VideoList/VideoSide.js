import React from "react";
import { Link } from 'react-router-dom';
import { BoxSide, BoxImageSide, BoxInfoSide, BoxTitleSide } from './styled';
import { ThemeContext } from '../../state/theme-context';

const NoImage = require('./noimage.jpg');
const VideoSide = ({ info, handleVideoSelected }) => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <BoxSide color ={theme.color} videoCardColor = {theme.videoCardColor} videoCardBackgroundColor = {theme.videoCardBackgroundColor} >
      <Link to={info.id.videoId} onClick={() => handleVideoSelected(info)}>
        {info.snippet.thumbnails.default?
            (<BoxImageSide alt="video thumbnail" src={info.snippet.thumbnails.medium.url} />)
            :
            (<BoxImageSide alt="video thumbnail" src={NoImage} />)
        }
        <BoxInfoSide>
            <BoxTitleSide>{info.snippet.title}</BoxTitleSide>
        </BoxInfoSide>
      </Link>
    </BoxSide>
  )};

export default VideoSide; 