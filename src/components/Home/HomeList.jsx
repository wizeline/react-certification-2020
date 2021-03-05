import React from 'react';
// Components
import Card from '../common/Card';
import { useVideos } from '../../providers/Videos/Videos.provider';

const HomeList = () => {
  const { videos } = useVideos();
  return (
    <>
      {videos.map((item) => (
        <Card
          key={`${item.snippet.title}-${item.snippet.description}`}
          title={item.snippet.title}
          description={item.snippet.description}
          image={item.snippet.thumbnails.high.url}
          url={`/video/${item.id.videoId}`}
        />
      ))}
    </>
  );
};

export default HomeList;
