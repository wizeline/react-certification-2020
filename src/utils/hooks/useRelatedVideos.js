import { useEffect, useState } from 'react';
import YoutubeService from '../../services/youtube/youtube.service';

export const useRelatedVideosData = (id) => {
  const [related, setRelated] = useState([]);
  const [info, setInfo] = useState({});
  const fetchData = async (videoId) => {
    try {
      let first = await YoutubeService.videoInfo(videoId);
      let videos = await YoutubeService.relatedVideos(videoId);
      videos = videos.filter((video) => video.snippet);
      first = first.concat(videos);
      setInfo(first[0]);
      setRelated(first);
    } catch (error) {
      console.warn({ error });
      setRelated([]);
    }
  };
  useEffect(() => {
    fetchData(id);
  }, [id]);

  return { related, info };
};
