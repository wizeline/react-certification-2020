import React from 'react';
import { render } from '@testing-library/react';

import VideoListContent from './VideoList.component';

const mockItems = [
  {
      "kind": "youtube#searchResult",
      "etag": "cylzhPNdB4nBv5TkvEG8_2suz74",
      "id": {
        "kind": "youtube#channel",
        "channelId": "UCPGzT4wecuWM0BH9mPiulXg"
      },
      "snippet": {
        "publishedAt": "2014-09-27T01:39:18Z",
        "channelId": "UCPGzT4wecuWM0BH9mPiulXg",
        "title": "Wizeline",
        "description": "Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline's ...",
        "thumbnails": {
          "default": {
            "url": "https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s88-c-k-c0xffffffff-no-rj-mo"
          },
          "medium": {
            "url": "https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s240-c-k-c0xffffffff-no-rj-mo"
          },
          "high": {
            "url": "https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo"
          }
        },
        "channelTitle": "Wizeline",
        "liveBroadcastContent": "upcoming",
        "publishTime": "2014-09-27T01:39:18Z"
      }
  }
];

describe('<Content />', () => {
  it('maps expected items', () => {
    const renderRes = render(<VideoListContent data={mockItems} />);
    const items = renderRes.container.querySelectorAll('.container');
    expect(items.length).toBe(mockItems.length);
  });
});