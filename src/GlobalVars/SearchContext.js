import  { createContext } from "react";

 const SearchContext = createContext({
    valueFinal: 'wizeline',
    setValueFinal: (value) => {},
    titles: {title: "", description: "", videoId: "", url: ""},
    setTitles: (value) => {},
    videoList: [],
    setVideoList: (value) => {},
    favoriteItems: [],
    setFavoriteItems: (value) => {},
    labelState: 'Agregar a favoritos',
    setLabelState: (value) => {},
    avatarUrl: '',
    setAvatarUrl: (value) => {}
    

    
   

});

export default SearchContext;