import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

// import { useAuth } from '../../providers/Auth';
import VideoCardPanel from '../../components/VideoCardPanel';
import mockedVideos from '../../utils/mockData.json';

const HomePageWrapper = styled.div`
  background-color: snow;
`;

function HomePage({ inputState }) {
  // const history = useHistory();
  // const { authenticated, logout } = useAuth();
  const [videos, setVideos] = useState([]);

  // const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  // const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${inputState}&key=${API_KEY}`;

  // function deAuthenticate(event) {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // }

  useEffect(() => {
    // const fetchVideos = async () => {
    //   const videosFetched = await fetch(API_URL).then((response) => response.json());
    //   setVideos(videosFetched.items);
    // };
    // fetchVideos();
    // return () => {
    //   setVideos([]);
    // };
    setVideos(mockedVideos.items);
  }, [inputState]);

  return (
    <HomePageWrapper> {videos && <VideoCardPanel videos={videos} />}</HomePageWrapper>
  );
}

export default HomePage;
