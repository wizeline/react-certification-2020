// React
import React, { useRef } from 'react';
import HomeList from '../../components/Home';
// Styles
import { ContentContainer, HomeContainer, HomeTitle } from './styles';

const HomePage = () => {
  const sectionRef = useRef(null);

  return (
    <HomeContainer ref={sectionRef}>
      <HomeTitle>Welcome to the Challenge!</HomeTitle>
      <ContentContainer>
        <HomeList />
      </ContentContainer>
    </HomeContainer>
  );
};

export default HomePage;
