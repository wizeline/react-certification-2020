import { useState, useEffect } from "react";

import youtube from "../../apis/youtube";

const useYouTubeAPI = (searchQuery) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await youtube.get("/search", {
        params: {
          q: searchQuery,
        },
      });
      setVideos(response.data);
      console.log(response);
    };
    console.log({ searchQuery });
    fetchVideos();
  }, [searchQuery]);

  return { videos };
};

export { useYouTubeAPI };
