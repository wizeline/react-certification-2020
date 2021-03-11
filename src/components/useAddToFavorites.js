import { useState } from "react";
import { useParams } from 'react-router-dom';

export const useAddToFavorites = () => {
  const addFavorites = "agregar a favoritos";
  const removeFavorites = "eliminar de favoritos";
  const add = "add";
  const remove = "remove";
  let { id } = useParams();
  const getArray = JSON.parse(localStorage.getItem('favorites'));
  let action = getArray.find((videoId) => videoId === id) ? remove : add;
  let label = action === add ? addFavorites : removeFavorites;
  console.log(action);
  const [favorites, setFavorites] = useState(getArray ? getArray:[]);

  const handleChange = () => {
    let array = favorites;
    if (action === add) {
      array.push(id);
      setFavorites([...array]);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      label = removeFavorites;
      action = remove;
    } else {
      var filtered = array.filter(function(value, index, arr) {
        return value !== id;
      });
      localStorage.setItem("favorites", JSON.stringify(filtered));
      setFavorites([...filtered]); 
      label = addFavorites;
      action = add;
    }
  }

  return [label, handleChange];
}