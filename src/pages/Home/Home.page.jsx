import React, { useRef, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import { WelcomeSection, VideosList } from './Home.styles';
import videosListJSON from '../../mock.json';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();
  const [videosList, setVideosList] = useState([]);

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  useEffect(() => {
    setVideosList(videosListJSON.items);
  });

  return (
    <div ref={sectionRef}>
      <WelcomeSection>
        <h1>Welcome to the challenge!</h1>
      </WelcomeSection>
      <VideosList>
        {videosList.map((video) => {
          return (
            <div>
              <img src={video.snippet.thumbnails} alt="VideoImage" />
              <h3>{video.snippet.title} :</h3>
              <p>{video.snippet.description}</p>
            </div>
          );
        })}
      </VideosList>
      {authenticated ? (
        <>
          <WelcomeSection>
            <h1>Good to have you back!</h1>
          </WelcomeSection>
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
    </div>
  );
}

export default HomePage;
