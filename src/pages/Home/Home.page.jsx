import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import VideoList from '../../components/VideoList';
import { useFetch } from '../../components/useFetch';
import { useSearchVideo } from '../../components/useSearchVideo';
import { useAuth } from '../../providers/Auth';
import { mockedYTData } from "../../YT_list";

function HomePage() {
  //const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();
  //const { items } = mockedYTData;
  const [ searchVideo ] = useSearchVideo();
  const searchQuery = typeof searchVideo === 'string' && searchVideo === "" ? "wizeline" : searchVideo ;

  const { hasErrors, isLoaded, items } = useFetch(`${process.env.REACT_APP_YOUTUBE_SEARCH}?q=${searchQuery}&part=id&part=snippet&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
  // const isLoaded = true;
  // const hasErrors = false;
/*
  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }
*/
  return (
    <section ref={sectionRef}>
      <h2 className = "welcome">Welcome to the Challenge!</h2>
      {authenticated && items ? (
        <VideoList items={items} isLoaded={isLoaded} hasErrors={hasErrors} />
      ) : (
        <Link to="/login">let me in →</Link>
      )}
    </section>
  );
}

export default HomePage;
