import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useVideoSearch } from '../../providers/VideoSearch';
import VideoList from '../../components/VideoList';
import { useAuth } from '../../providers/Auth';

const HomePage = () => {

  const {
    search,
    items,
    setItems,
    setSearch,
    setRelatedVideos
  } = useVideoSearch();

  const sectionRef = useRef(null);
  const { authenticated } = useAuth();
  //const [ searchVideo ] = useSearchVideo();
  //const searchQuery = typeof searchVideo === 'string' && searchVideo === "" ? "wizeline" : searchVideo ;
  //const { hasErrors, isLoaded, items } = useFetch(`${process.env.REACT_APP_YOUTUBE_SEARCH}?q=${searchQuery}&part=id&part=snippet&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);

  const firstSearch = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_YOUTUBE_SEARCH}?q=wizeline&part=id&part=snippet&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
      const json = await res.json();
      setItems(json.items);
      setRelatedVideos(json.items);
    } catch (error) {
      setItems(null);
    }
  }

  if (search === '') {
    setSearch('wizeline');
    firstSearch();
  }

  return (
    <section ref={sectionRef}>
      <h2 className = "welcome">Welcome to the Challenge!</h2>
      {authenticated ? (
        <VideoList items={items} />
      ) : (
        <Link to="/login" className= "toLogin" >let me in →</Link>
      )}
    </section>
  );
}

export default HomePage;
