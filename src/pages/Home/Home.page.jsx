// React
import React, { useRef, useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Selectors
import selectors from '../../store/mokup/selectors';
// Actions
import mokupActions from '../../store/mokup/actions';
// Components
import Card from '../../components/common/Card';
// Styles
import { ContentContainer, HomeContainer, HomeTitle } from './styles';

const HomePage = () => {
  const dispatch = useDispatch();
  const mokup = useSelector((state) => selectors.selectMokup(state));
  const sectionRef = useRef(null);

  useEffect(() => {
    dispatch(mokupActions.load());
  }, [dispatch]);

  return (
    <HomeContainer ref={sectionRef}>
      <HomeTitle>Welcome to the Challenge!</HomeTitle>
      <ContentContainer>
        {mokup.map((item) => (
          <Card
            key={`${item.snippet.title}-${item.snippet.description}`}
            title={item.snippet.title}
            description={item.snippet.description}
            image={item.snippet.thumbnails.high.url}
          />
        ))}
      </ContentContainer>
    </HomeContainer>
  );
};

export default HomePage;
