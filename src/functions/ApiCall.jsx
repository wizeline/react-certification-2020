// import React, { useState, useEffect, useContext } from 'react';
// import SearchContext from '../SearchContext';
// import {videos} from '../mock/youtube-videos-mock';

// function UseApiCall(props){

//     const {valueFinal} = useContext(SearchContext);
//     const [searchResults, setSearchResults] = React.useState([]);

//     useEffect(() => {

//       fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAagMd1O7wZpIZF3qw6MFbDKe9PbRgxwpA&part=snippet&maxResults=1&q=${valueFinal}`)
//       .then((response) => response.json())
//       .then((json) => {
//         setSearchResults(json.items) ;
//       })
//       .catch((error) => {
//         console.error(error);
//       });
      
//       let results = videos.items;
//       setVideoList(results);
      
//       }, [valueFinal]);
//   }

// export default UseApiCall;