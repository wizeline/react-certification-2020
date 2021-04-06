import React from "react";
import { useHistory } from 'react-router-dom';
import Styled from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useVideoSearch } from '../../providers/VideoSearch'; 

export const Search = (url) => {
  //const [searchVideo, handleChange] = useSearchVideo();
  let history = useHistory();

  const {
    search,
    selectedVideo,
    setSearch,
    setItems,
    setSelectedVideo,
    setRelatedVideos,
  } = useVideoSearch();

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(search!='') {
      try {
        const res = await fetch(`${process.env.REACT_APP_YOUTUBE_SEARCH}?q=${search}&part=id&part=snippet&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
        const json = await res.json();
        console.log(json);
        setItems(json.items);
        setSelectedVideo(json.items[0]);
        history.push('/');
      } catch (error) {
        setItems(null);
      }
    }  
  };

  return (
    <Styled.Search>
      <span className = "icon"><FontAwesomeIcon icon={faSearch} /></span>
      <form style={{ display: 'inline' }} onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={handleChange} placeholder = "Search..." aria-label="search" />
      </form>
    </Styled.Search>
  );
}