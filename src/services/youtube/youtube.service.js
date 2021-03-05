import axios from 'axios';
import { MAX_VIDEOS_TO_FETCH } from '../../utils/constants';

const base = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  params: {
    part: 'snippet',
    maxResults: MAX_VIDEOS_TO_FETCH,
    key: `${process.env.REACT_APP_API_KEY}`,
  },
});

const popular = async () => {
  const { data } = await base.get('/search', {
    params: {
      chart: 'mostPopular',
      regionCode: 'mx',
    },
  });
  return data.items;
};

const videoInfo = async (videoId) => {
  const { data } = await base.get('/search', {
    params: {
      id: videoId,
    },
  });
  const video = data.items.filter((item) => item.id.videoId === videoId);
  return video;
};

const relatedVideos = async (videoId) => {
  const { data } = await base.get('/search', {
    params: {
      relatedToVideoId: videoId,
      type: 'video',
    },
  });
  return data.items;
};

const search = async (query) => {
  const { data } = await base.get('/search', {
    params: {
      q: query,
    },
  });
  return data.items;
};

const YoutubeService = {
  popular,
  search,
  relatedVideos,
  videoInfo,
};

export default YoutubeService;
