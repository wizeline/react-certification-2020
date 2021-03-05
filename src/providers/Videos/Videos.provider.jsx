import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from 'react';
import YoutubeService from '../../services/youtube/youtube.service';

const VideosContext = createContext({
  videos: [],
  filterVideos: () => {},
});

const useVideos = () => {
  const context = useContext(VideosContext);
  if (!context) {
    throw new Error(`Can't use "useVideos" without an VideosProvider!`);
  }
  return context;
};

const VideosProvider = ({ children, value }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(value);
  }, [value]);

  const filterVideos = useCallback(
    async (query) => {
      try {
        const newVideos = await YoutubeService.search(query);
        setVideos(newVideos);
      } catch (error) {
        setVideos(value);
      }
    },
    [value]
  );

  return (
    <VideosContext.Provider value={{ videos, filterVideos }}>
      {children}
    </VideosContext.Provider>
  );
};
export { useVideos };
export default VideosProvider;
