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
  const [inputState, setInputState] = useState();
  const [videos, setVideos] = useState([]);

  // const API_KEY = 'AIzaSyC3Ha2WRItz9dOoJ0ZjeksOHvKOsdWDgn0';
  // const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${inputState}&key=${API_KEY}`;

  // function deAuthenticate(event) {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // }

  const handleInput = (event) => {
    event.persist();
    if (event) {
      setInputState(event.target.value);
    }
  };

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
      <section className="navbar">
        <input className="search-input" type="text" onChange={handleInput} />
        <button type="button">{inputState}</button>
        <h2>Search bar</h2>
      </section>
      {videos && <VideoCardPanel videos={videos} />}
    </section>
  );
}

export default HomePage;
