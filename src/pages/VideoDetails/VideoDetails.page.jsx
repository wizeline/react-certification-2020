import React from 'react';
import VideoList from '../../components/VideoList';
import DetailContent from './DetailContent';

import { useVideoSearch } from '../../providers/VideoSearch';

function VideoDetailsPage() {
  const {
    selectedVideo
  }  = useVideoSearch();

  // const reloadedPage = async () => {
  //   try {
  //     const res = await fetch(`${process.env.REACT_APP_YOUTUBE_SEARCH}?q=wizeline&part=id&part=snippet&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
  //     const json = await res.json();
  //     setItems(json.items);
  //   } catch (error) {
  //     setItems(null);
  //   }
  // }

  // if (relatedVideos.length === 0) {
  //   console.log(relatedVideos.length);
  //   reloadedPage();
  // }
  return (
    <section className ="detailPage">
      <>
        <div className = "rigthSide">
          <DetailContent videoInfo ={selectedVideo} />
        </div>
        <div className = "leftSide">
          <VideoList sideList = 'sideList' />
        </div>
      </>
    </section>
  );
}

export default VideoDetailsPage;
