import React from 'react';
import { useParams } from 'react-router-dom';
import List from '../../components/Videos/List';
import Visualizer from '../../components/Videos/Visualizer';
import { useRelatedVideosData } from '../../utils/hooks/useRelatedVideos';
import {
  ContentContainer,
  Description,
  LeftContainer,
  RightContainer,
  Title,
  VideoContainer,
} from './styles';

const VideoDetails = () => {
  const { id } = useParams();
  const { related, info } = useRelatedVideosData(id);

  return (
    <VideoContainer data-testid="video-detail-test">
      <LeftContainer>
        <Visualizer id={id} />
        {info && info.snippet && (
          <ContentContainer>
            <Title>{info.snippet && info.snippet.title}</Title>
            <Description>{info.snippet && info.snippet.description}</Description>
          </ContentContainer>
        )}
      </LeftContainer>
      <RightContainer>
        <List related={related} />
      </RightContainer>
    </VideoContainer>
  );
};

export default VideoDetails;
