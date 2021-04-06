import React from "react";
import { Link } from 'react-router-dom';
import { Box, BoxImage, BoxInfo, BoxTitle, BoxText, BoxFavs } from './styled';
import { ThemeContext } from '../../state/theme-context';

const NoImage = require('../VideoList/noimage.jpg');
const FavVideos = ({ info, handleVideoSelected }) => {
const { theme } = React.useContext(ThemeContext);

  return (
    <Box color ={theme.color} videoCardColor = {theme.videoCardColor} videoCardBackgroundColor = {theme.videoCardBackgroundColor} >
      <Link to={info.id.videoId} onClick={() => handleVideoSelected(info)} >
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
      </Link>
    </Box>
  )};

export default FavVideos; 