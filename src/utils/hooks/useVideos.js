import { useEffect, useState } from 'react';
import YoutubeService from '../../services/youtube/youtube.service';

export const useVideosData = () => {
  const [videos, setVideos] = useState([]);
  const fetchData = async () => {
    try {
      const data = await YoutubeService.popular();
      setVideos(data);
    } catch (error) {
      console.warn({ error });
      setVideos([]);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { videos };
};
