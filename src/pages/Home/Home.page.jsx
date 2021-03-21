import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import { LayoutGeneral, WelcomeSection, VideosList } from './Home.styles';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <LayoutGeneral ref={sectionRef}>
      <WelcomeSection>
        <h1>Welcome to the challenge!</h1>
      </WelcomeSection>
      <VideosList>
        <div>
          <h2>Title</h2>
          <p>Description</p>
        </div>
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
    </LayoutGeneral>
  );
}

export default HomePage;
