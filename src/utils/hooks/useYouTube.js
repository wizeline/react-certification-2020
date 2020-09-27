import { useState, useEffect } from "react";

import youtube from "../../apis/youtube";

const useYouTubeAPI = () => {
  const [videos, setVideos] = useState([]);

  useEffect((querys) => {
    const fetchVideos = async (qs = "Wizeline") => {
      const response = await youtube.get("/search", {
        params: {
          q: qs,
        },
      });
      setVideos(response.data);
      console.log(response);
    };
    fetchVideos(querys);
  }, []);

  return { videos };
};

export { useYouTubeAPI };
