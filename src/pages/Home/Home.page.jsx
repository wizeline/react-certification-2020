import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import VideoCardPanel from '../../components/VideoCardPanel';
import mockedVideos from '../../utils/mockData.json';

const HomePageWrapper = styled.div`
  background-color: snow;
`;

const HomePageTitle = styled.h1`
  padding-left: 26px;
`;

function HomePage({ inputState }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
    // const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${inputState}&key=${API_KEY}`;
    // const fetchVideos = async () => {
    //   const videosFetched = await fetch(API_URL).then((response) => response.json());
    //   setVideos(videosFetched.items);
    // };
    // fetchVideos();
    setVideos(mockedVideos.items);
  }, [inputState]);

  return (
    <>
    <HomePageTitle>Home</HomePageTitle>
    <HomePageWrapper> {videos && <VideoCardPanel videos={videos} />}</HomePageWrapper>
    </>
  );
}

export default HomePage;
