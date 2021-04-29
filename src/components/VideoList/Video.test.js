import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoMain from './VideoMain';
import VideoSide from './VideoSide';

const mockItem = {
    "kind": "youtube#searchResult",
    "etag": "erqeM78PZDWIBe8qOGHGM2WdSE8",
    "id": {
      "kind": "youtube#video",
      "videoId": "nmXMgqjQzls"
    },
    "snippet": {
      "publishedAt": "2019-09-30T23:54:32Z",
      "channelId": "UCPGzT4wecuWM0BH9mPiulXg",
      "title": "Video Tour | Welcome to Wizeline Guadalajara",
      "description": "Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "Wizeline",
      "liveBroadcastContent": "none",
      "publishTime": "2019-09-30T23:54:32Z"
    }
};

describe('<ContentCard />', () => {
  it('contains img tag for thumbnail', () => {
    render(<VideoMain info={mockItem} />);

    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('class', 'image');
    expect(logo).toHaveAttribute('alt', 'video thumbnail');
  });
    
  it('contains H2 tag for title', () => {
    render(<VideoMain info={mockItem} />);

    expect(screen.getByText(mockItem.snippet.title).tagName).toBe('H2');
  });

  it('maps expected description', () => {
    render(<VideoMain info={mockItem} />);
    expect(screen.getByText(mockItem.snippet.description).tagName).toBe('P');
  });

  it('sidebar contains img tag for thumbnail', () => {
    render(<VideoSide info={mockItem} />);

    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('alt', 'video thumbnail');
  });
    
  it('sidebar contains p tag for title', () => {
    render(<VideoSide info={mockItem} />);

    expect(screen.getByText(mockItem.snippet.title).tagName).toBe('P');
  });

});