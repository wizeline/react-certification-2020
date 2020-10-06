import React from 'react';
import styled from 'styled-components';
import { useVideoContext } from '../../store/VideoContext';

const VideoDetailWrapper = styled.div`
  height: 600px;
  iframe {
    width: 70%;
    height: 500px;
  }
  h1 {
    font-weight: bold;
    margin: 0;
  }
  h2 {
    font-weight: normal;
    font-size: medium;
  }
  h1,
  h2 {
    width: 70%;
  }
`;

function VideoDetailCard() {
  const { state } = useVideoContext();
  return (
    <VideoDetailWrapper>
      <iframe
        src={`https://www.youtube.com/embed/${state.currentVideo.videoId}`}
        title={state.currentVideo.videoTitle}
      />
      <h1>{state.currentVideo.videoTitle}</h1>
      <h2>{state.currentVideo.videoDescription}</h2>
    </VideoDetailWrapper>
  );
}

export default VideoDetailCard;
