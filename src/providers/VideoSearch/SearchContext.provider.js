import React, { useContext, createContext, useReducer } from 'react';

const initialState = {
  search: '',
  items : [],
  relatedVideos : [],
  selectedVideo : {
      id : { 
        videoId : "" 
      },
      snippet : { 
        title : "",
        description : "",
      }
    }
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case 'SET_SEARCH': {
      return { ...state, search: payload };
    }

    case 'SET_ITEMS': {
      return { ...state, items: payload };
    }

    case 'SET_SELECTED_VIDEO': {
      return { ...state, selectedVideo: payload };
    }

    case 'SET_RELATED_VIDEOS': {
      return { ...state, relatedVideos: payload };
    }

    default: {
      return state;
    }
  }
};

export const SearchContext = createContext(null);

export const useVideoSearch = () => {
  const context = useContext(SearchContext);
  return context;
};

const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setSearch = (payload) =>
    dispatch({ type: 'SET_SEARCH', payload });

  const setItems = (payload) => 
    dispatch({ type: 'SET_ITEMS', payload });

  const setSelectedVideo = (payload) => 
    dispatch({ type: 'SET_SELECTED_VIDEO', payload });

  const setRelatedVideos = (payload) => 
    dispatch({ type: 'SET_RELATED_VIDEOS', payload });

  return (
    <SearchContext.Provider value={{ ...state, setSearch, setItems, setSelectedVideo, setRelatedVideos }} >
      {children}
    </SearchContext.Provider>
  );
};

export default VideoProvider; 