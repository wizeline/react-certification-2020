import React, {  useEffect, useState } from 'react';
import VideoItem from './components/VideoItem.js';
import {videos} from './mock/youtube-videos-mock';
import {Title, Vid , Container} from './components/Body.js';

function Body() {
    const [searchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);


React.useEffect(() => {

  let results = videos.items;
    setSearchResults(results);
  }, [searchTerm]);
  
        return (
          <div>
            <Container>
                <Title>Welcome to the Challenge!</Title>
                <Vid>
                  {searchResults.map((item) => (
                      <VideoItem title={item.snippet.title} description={item.snippet.description} url={item.snippet.thumbnails.medium.url} />
                  ))}  
                </Vid>
            </Container>
            </div>
        )

};

export default Body;