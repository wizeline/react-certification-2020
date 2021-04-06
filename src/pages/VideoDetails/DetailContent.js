import React from 'react';
import { useParams } from 'react-router-dom';
import { useAddToFavorites } from '../../components/useAddToFavorites';
import { Page, BoxInfo, BoxText, DetailPage, Title, AddFavorite } from './styled';
import { ThemeContext } from '../../state/theme-context';

function DetailContent(videoInfo) {
  let { id } = useParams();
  let videoSrc = `https://www.youtube.com/embed/${id}?controls=0&autoplay=0`;

  const [label, handleChange] = useAddToFavorites();
  const { theme } = React.useContext(ThemeContext);

  if(!videoInfo.videoInfo) {
    return <div>loading...</div>
  }

  return (
    <Page color ={theme.color} videoCardBackgroundColor = {theme.videoCardBackgroundColor}>
        <iframe
            id="ytplayer"
            type="text/html" 
            width="100%"
            height="500"
            allowFullScreen
            frameBorder="0"
            title="rick roll"
            src={videoSrc}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            className ="youtubeFrame"
        />
        <BoxInfo>
            <DetailPage>
                <Title videoCardColor = {theme.color} >{videoInfo.videoInfo.snippet.title}</Title>
                <AddFavorite videoCardColor = {theme.color} >
                    <button onClick={() => handleChange(videoInfo.videoInfo)}>{label}</button>
                </AddFavorite>
            </DetailPage>
            <BoxText videoCardColor = {theme.color} >{videoInfo.videoInfo.snippet.description}</BoxText>
        </BoxInfo> 
    </Page>
  );
}

export default DetailContent;
