import React from 'react';

import './List.styles.css';

import Card from '../Card';

function List({ items }) {
  return (
    <div className="items-list" data-testid="items-list">
      {items.map(({ etag, snippet }) => (
        <Card
          key={etag}
          title={snippet.title}
          description={snippet.description}
          thumbnail={snippet.thumbnails.default.url}
        />
      ))}
    </div>
  );
}

export default List;
