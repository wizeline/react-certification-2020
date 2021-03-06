import React from 'react';
import { useParams } from 'react-router-dom';
import { useAddToFavorites } from '../../components/useAddToFavorites';
import { BoxInfo, BoxText, DetailPage, Title, AddFavorite } from './styled';

import { mockedYTData } from "../../YT_list";

function DetailContent(videoData) {
    let { id } = useParams();
    let videoSrc = `https://www.youtube.com/embed/${id}?controls=0&autoplay=0`;

    const videoInfo = mockedYTData.find(function(post) {
        if(post.id.videoId === id)
        return true;
    });
    const [label, handleChange] = useAddToFavorites();
  return (
    <div>
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
        {videoInfo ?
            <BoxInfo>
                <DetailPage>
                    <Title>{videoInfo.snippet.title}</Title>
                    <AddFavorite>
                        <button onClick={() => handleChange()}>{label}</button>
                    </AddFavorite>
                </DetailPage>
                <BoxText>{videoInfo.snippet.description}</BoxText>
            </BoxInfo> :""
        }
    </div>
  );
}

export default DetailContent;
