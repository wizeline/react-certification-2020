import React from 'react';
import {LayoutGeneral, WelcomeSection, VideosList} from './Layout.Style';
import Header from '../Header/Header';

const Home = () => {
  return (
    <LayoutGeneral>
      <WelcomeSection>
        <h1>Welcome to the challenge!</h1>
      </WelcomeSection>
      <VideosList>
        <div>
          <img/>
          <h2>Title</h2>
          <p>Description</p>
        </div>
        <div>
          <img/>
          <h2>Title</h2>
          <p>Description</p>
        </div>
        <div>
          <img/>
          <h2>Title</h2>
          <p>Description</p>
        </div>
        <div>
          <img/>
          <h2>Title</h2>
          <p>Description</p>
        </div>
        <div>
          <img/>
          <h2>Title</h2>
          <p>Description</p>
        </div>
        <div>
          <img/>
          <h2>Title</h2>
          <p>Description</p>
        </div>
      </VideosList>
    </LayoutGeneral>
  );
};

export default Home;
