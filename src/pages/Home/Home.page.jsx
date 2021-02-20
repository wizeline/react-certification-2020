import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';
import List from '../../components/List/List.component';

import mockedData from '../../youtube-videos-mock.json';  

const { items } = mockedData;

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
    <section className="homepage" ref={sectionRef}>
      {authenticated ? (
        <>
          <h2>Good to have you back</h2>
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
          </span>
        </>
      ) : (
        <Link to="/login">let me in →</Link>
        )}
      <h3>Items list</h3>
      <List items={items}/>
    </section>
  );
}

export default HomePage;
