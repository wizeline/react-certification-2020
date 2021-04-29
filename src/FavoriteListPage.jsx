import React, {useState,useContext} from 'react';
import {Container,  Vid} from './components/Body';
//import {VideoItems, Parag, TitleVideo, Secondary, IMG} from './components/VideoPlayer.js';
import SearchContext from './GlobalVars/SearchContext';
import VideoItem from './VideoItem';

function FavoriteListPage(){
   
  const { setTitles, setVideoList } = useContext(SearchContext);

    return(
        <div>
            <Container >
            <Vid >
                  {Object.entries(localStorage).map(([key,value]) => (  

                    (key !="session" ) ?
                      <VideoItem setTitles={setTitles}
                      title={JSON.parse(value).title}
                      description={JSON.parse(value).description}
                      url={JSON.parse(value).url}
                      videoId={JSON.parse(value).videoId}></VideoItem>:null
                    
                  ))}  
                </Vid>
                
                  
            </Container>
            
            </div>
    );
}

export default FavoriteListPage;