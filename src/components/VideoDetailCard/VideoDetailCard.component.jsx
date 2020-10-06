import React, { useContext } from 'react';
import styled from 'styled-components';
import VideoContext from '../../store/VideoContext';

const VideoDetailWrapper = styled.div`
  border: 1px solid black;
  height: 600px;
  iframe {
    width: 70%;
    height: 500px;
  }
  h1 {
    font-weight: bold;
    margin: 0;
  }
  h1, h2 {
    width: 70%;
  }
`;

function VideoDetailCard() {
  const { state } = useContext(VideoContext);
  console.log(state);
  return (
    <VideoDetailWrapper>
      <iframe src={`https://www.youtube.com/embed/${state.currentVideo.videoId}`} title={state.currentVideo.videoTitle} />
      <h1>{state.currentVideo.videoTitle}</h1>
      <h2>{state.currentVideo.videoDescription}</h2>
    </VideoDetailWrapper>
  );
}

export default VideoDetailCard;
