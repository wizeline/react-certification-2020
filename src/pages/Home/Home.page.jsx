import React, { useRef, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();
  const [inputState, setInputState] = useState();
  const [videos, setVideos] = useState();

  const API_KEY = 'AIzaSyAyAUT8H48f6DmpxiL2vlPNU0icK-uOKDw';
  const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${inputState}&key=${API_KEY}`;

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  function test() {
    console.log(videos);
  }

  useEffect(() => {
    async function fetchVideos() {
      console.log(inputState);
      const videosFetched = await fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
      setVideos(videosFetched);
    }
    fetchVideos();
    // return () => {
    //   setVideos([]);
    // };
  }, [inputState, API_URL]);

  return (
    <section className="homepage-wrapper">
      <section className="navbar">
        <input
          className="search-input"
          type="text"
          onBlur={(event) => setInputState(event.target.value)}
        />
        <button type="button" onClick={test()}>
          TEST
        </button>
        <h2>Search bar </h2>
      </section>
      <section className="homepage" ref={sectionRef}>
        <h1>Hello stranger!</h1>
        {authenticated ? (
          <>
            <h2>Good to have you back</h2>
            <span>
              <Link to="/" onClick={deAuthenticate}>
                ← logout
              </Link>
              <span className="separator" />
              <Link to="/secret">show me something cool →</Link>
            </span>
          </>
        ) : (
          <Link to="/login">let me in →</Link>
        )}
      </section>
    </section>
  );
}

export default HomePage;
