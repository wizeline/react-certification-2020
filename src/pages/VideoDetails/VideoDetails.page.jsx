import React from 'react';
import VideoList from '../../components/VideoList';
import DetailContent from './DetailContent';
import { useFetch } from '../../components/useFetch';

function VideoDetailsPage() {
  const { hasErrors, isLoaded, items } = useFetch(`${process.env.REACT_APP_YOUTUBE_SEARCH}?q=wizeline&part=id&part=snippet&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);

  return (
    <section className ="detailPage">
    {items ? 
      <>
      <div className = "rigthSide">
        <DetailContent videoData ={items} />
      </div>
      <div className = "leftSide">
        <VideoList items={items} isLoaded={isLoaded} hasErrors={hasErrors} sideList = 'sideList' />
      </div> </> :""
    }
    </section>
  );
}

export default VideoDetailsPage;
