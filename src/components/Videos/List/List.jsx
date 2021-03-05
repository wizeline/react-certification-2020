import React from 'react';
// Components
import Card from '../../common/Card';
// Styles
import { ListContainer } from './styles';

const List = ({ related }) => {
  return (
    <ListContainer>
      {related.map((item) => (
        <Card
          key={`${item.id.videoId}`}
          title={item.snippet && (item.snippet.title || '')}
          description={item.snippet && (item.snippet.description || '')}
          image={item.snippet && (item.snippet.thumbnails.high.url || '')}
          url={`/video/${item.id.videoId}`}
          vertical
        />
      ))}
    </ListContainer>
  );
};

export default List;
