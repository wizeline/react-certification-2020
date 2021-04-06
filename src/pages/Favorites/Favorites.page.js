import React from 'react';
import { Link } from 'react-router-dom';
import FavVideos from '../../components/FavVideos';
import { useVideoSearch } from '../../providers/VideoSearch';

function FavoritesPage() {

  const {
    search,
    setSelectedVideo,
    setRelatedVideos
  } = useVideoSearch();
  
  const handleVideoSelected = async (video) => {
    setSelectedVideo(video);

  };

  const getFavorites = JSON.parse(localStorage.getItem('favorites'));
  if(!getFavorites) 
  return (
    <div className= "container noFavs" > 
      No tienes ningún video Favorito.
      <Link to='/' > Volver a Inicio</Link>
    </div>
  );
  
  return (
      <div className= "container" > 
        {getFavorites.map((item, index) => (
          <FavVideos info={item} key={index} handleVideoSelected={handleVideoSelected} />
        ))}
      </div>
  );
}
  
export default FavoritesPage;