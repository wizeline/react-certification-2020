import React from "react";
import { useSearchVideo } from '../useSearchVideo';

import Styled from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const Search = (url) => {
  const [searchVideo, handleChange] = useSearchVideo();

  return (
    <Styled.Search>
      <span className = "icon"><FontAwesomeIcon icon={faSearch} /></span>
      <input type="text" value={searchVideo} onChange={handleChange} placeholder = "Search..." aria-label="search" />
    </Styled.Search>
  );
}