import React, {  useContext } from 'react';
import VideoItem from './VideoItem.jsx';
import {videos} from './mock/youtube-videos-mock';
import {Title, Vid , Container} from './components/Body.js';
import SearchContext from './GlobalVars/SearchContext';



function Body() {

    const [searchTerm] = React.useState("");
    // Descomentar API const
    const [searchResults, setSearchResults] = React.useState([]);
    //const [searchResults, setSearchResults] = React.useState(videos.items);
    const {valueFinal} = useContext(SearchContext);
    const { setTitles, setVideoList } = useContext(SearchContext);



React.useEffect(() => {
  const fetch = require("node-fetch");
 
    fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAagMd1O7wZpIZF3qw6MFbDKe9PbRgxwpA&part=snippet&maxResults=20&q=${valueFinal}`)
    .then((response) => response.json())
    .then((json) => {
      setSearchResults(json.items) ;
    })
    .catch((error) => {
      console.error(error);
   });
  
   let results = videos.items;
   setVideoList(results);
   setSearchResults(results);
  
  }, [valueFinal]);

  // let results = videos.items;
  //   setVideoList(results);
  //   setSearchResults(results);
  
  //  }, [valueFinal]);


  
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