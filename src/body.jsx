import React, {  useEffect, useState,useContext } from 'react';
import VideoItem from './VideoItem.jsx';
import {videos} from './mock/youtube-videos-mock';
import {Title, Vid , Container} from './components/Body.js';
import ThemeContext  from './themes';
import SearchContext from '../src/SearchContext';
import Context from './components/Context';


function Body({ setTitles, setVideoList}) {

    const [searchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    
    const {valueFinal} = useContext(SearchContext);
    
    const { state } = useContext(Context);



React.useEffect(() => {
 
    fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAagMd1O7wZpIZF3qw6MFbDKe9PbRgxwpA&part=snippet&maxResults=2&q=${valueFinal}`)
    .then((response) => response.json())
    .then((json) => {
      setSearchResults(json.items) ;
    })
    .catch((error) => {
      console.error(error);
   });
  
   let results = videos.items;
   setVideoList(results);
  
  }, [valueFinal]);


  
        return (
          <div>
         
            <Container >
          
                <Title >Welcome to the Challenge!</Title>
            
                <Vid >
                  {searchResults.map((item) => (
                      <VideoItem setTitles={setTitles}
                      searchResults={searchResults}
                      setVideoList={setVideoList}
                      title={item.snippet.title} 
                      description={item.snippet.description}
                       url={item.snippet.thumbnails.medium.url}
                       videoId={item.id.videoId}  />
                  ))}  
                </Vid>
                
                
            </Container>
            
            </div>
        )

};

export default Body;