import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

// import { useAuth } from '../../providers/Auth';
import './Home.styles.css';
import VideoCardPanel from '../../components/VideoCardPanel';

function HomePage() {
  // eslint-disable-next-line global-require
  const json = require('../../utils/mockData.json');
  // const history = useHistory();
  // const { authenticated, logout } = useAuth();
  const [videos, setVideos] = useState([]);

  // const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  // const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${inputState}&key=${API_KEY}`;

  // function deAuthenticate(event) {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // }

  useEffect(() => {
    setVideos(json.items);
  }, [json]);

  // setVideos(json);
  // useEffect(() => {
  //   const fetchVideos = async () => {
  //     const videosFetched = await fetch(API_URL).then((response) => response.json());
  //     setVideos(videosFetched.items);
  //   };
  //   fetchVideos();
  //   // return () => {
  //   //   setVideos([]);
  //   // };
  // }, [inputState]);

  return (
    <section className="homepage-wrapper">
      {/* <Navbar inputState={inputState} setInputState={setInputState} /> */}
      {videos && <VideoCardPanel videos={videos} />}
    </section>
  );
}

export default HomePage;
