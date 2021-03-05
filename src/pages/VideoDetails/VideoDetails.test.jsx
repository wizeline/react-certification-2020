// React
import React from 'react';
// Testing
import { screen, render } from '@testing-library/react';
// Components
import VideoDetails from './VideoDetails';
import VideosProvider from '../../providers/Videos/Videos.provider';

const relatedMokup = [
  {
    kind: 'youtube#searchResult',
    etag: 'qTtZNL0lYW0zWZCHMtnW1Zu1Sfs',
    id: {
      kind: 'youtube#video',
      videoId: 'SiDYFCd9SH4',
    },
    snippet: {
      publishedAt: '2020-09-26T02:26:02Z',
      channelId: 'UCXIJgqnII2ZOINSWNOGFThA',
      title: 'Hannity slams the left&#39;s attacks on Judge Amy Coney Barrett',
      description:
        'President Trump expected to nominate appeals court judge to the Supreme Court Saturday. #FoxNews #Hannity Subscribe to Fox News! https://bit.ly/2vBUvAS ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/SiDYFCd9SH4/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/SiDYFCd9SH4/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/SiDYFCd9SH4/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Fox News',
      liveBroadcastContent: 'none',
      publishTime: '2020-09-26T02:26:02Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'rk64pdHo_kvd3E4eYbGjC5LDg6Y',
    id: {
      kind: 'youtube#video',
      videoId: 'WRoZgfjzGNQ',
    },
    snippet: {
      publishedAt: '2020-09-20T04:00:00Z',
      channelId: 'UCLkAepWjdylmXSltofFvsYQ',
      title: 'BTS (방탄소년단) &#39;Dynamite&#39; (&#39;70s remix) MV',
      description:
        'BTS #방탄소년단 #BTS_Dynamite Connect with BTS: https://ibighit.com/bts http://twitter.com/BTS_bighit http://twitter.com/BTS_twt ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/WRoZgfjzGNQ/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/WRoZgfjzGNQ/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/WRoZgfjzGNQ/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'BANGTANTV',
      liveBroadcastContent: 'none',
      publishTime: '2020-09-20T04:00:00Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'Oui4WDt1DiTfEnnFwmIYvXddG48',
    id: {
      kind: 'youtube#video',
      videoId: 'ZujP5qjviLc',
    },
    snippet: {
      publishedAt: '2020-09-18T14:00:02Z',
      channelId: 'UCXooz9whNJZBRTHi9AqdjPw',
      title: 'Gusttavo Lima - De Menina Pra Mulher (O Embaixador The Legacy)',
      description:
        'Essa música faz parte do novo álbum do Gusttavo Lima, O Embaixador The Legacy, gravado em Goiânia/GO. INSCREVA-SE NO CANAL: ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/ZujP5qjviLc/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/ZujP5qjviLc/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/ZujP5qjviLc/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Gusttavo Lima Oficial',
      liveBroadcastContent: 'none',
      publishTime: '2020-09-18T14:00:02Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'l7gYGxv9Fe1QVWxe9kmOCGuhCeU',
    id: {
      kind: 'youtube#video',
      videoId: 'E8Im8orjfho',
    },
    snippet: {
      publishedAt: '2020-09-24T19:45:00Z',
      channelId: 'UCaXkIU1QidjPwiAYu6GcHjg',
      title: 'Watch All In With Chris Hayes Highlights: September 23 | MSNBC',
      description:
        'Get the latest news and commentary from Chris Hayes weekdays at 8 p.m. ET on MSNBC. » Subscribe to MSNBC: http://on.msnbc.com/SubscribeTomsnbc ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/E8Im8orjfho/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/E8Im8orjfho/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/E8Im8orjfho/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'MSNBC',
      liveBroadcastContent: 'none',
      publishTime: '2020-09-24T19:45:00Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'JrIOfn8SO_0vifjfOfpPtSpYsZE',
    id: {
      kind: 'youtube#video',
      videoId: 'IyqPvdQvEIc',
    },
    snippet: {
      publishedAt: '2020-09-18T19:42:39Z',
      channelId: 'UCVeT85DCQZ4urbnmce1k0BQ',
      title: 'Juriul X Factor, în lacrimi! Super 4 cântă Caruso - Lucio Dalla',
      description:
        'Super 4 au cântat la cererea juraților! |Lucio Dalla - Caruso @The X Factor Romania, în fiecare vineri, de la 20:30, la Antena 1! #XFactor #Antena1 #deneoprit ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/IyqPvdQvEIc/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/IyqPvdQvEIc/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/IyqPvdQvEIc/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'The X Factor Romania',
      liveBroadcastContent: 'none',
      publishTime: '2020-09-18T19:42:39Z',
    },
  },
];

jest.mock('../../utils/hooks/useRelatedVideos', () => ({
  useRelatedVideosData: () => {
    return { related: relatedMokup, info: relatedMokup[0] };
  },
}));
jest.mock('react-router-dom', () => ({
  useParams: () => ({ id: 'ZujP5qjviLc' }),
}));
describe('Home Page', () => {
  beforeEach(async () => {
    render(
      <VideosProvider value={[]}>
        <VideoDetails />
      </VideosProvider>
    );
  });
  test('review that it renders correctly and review the inner children', () => {
    const videoDetails = screen.getByTestId('video-detail-test');
    expect(videoDetails.children.length).toEqual(2);
  });
  test('Renders the video visualizer', () => {
    expect(screen.getAllByTestId('video-frame').length).toEqual(1);
  });
});
