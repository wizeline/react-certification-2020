import { FavoriteButton } from "./components/VideoPlayer.js";
import React, { useState, useEffect, useContext } from "react";
import SearchContext from "./GlobalVars/SearchContext";


function ButtonAddRemFavorite() {
  const { titles, setTitles } = useContext(SearchContext);
  const [labelState, setLabelState] = useState("");
  const {setVideoList} = useContext(SearchContext);
 

  useEffect(() => {
    setLabelState("Agregar a favoritos");
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) === titles.title) {
        console.log("si esta: " + localStorage.key(i));
        setLabelState("Remover de favoritos");
      }
    }
  }, [titles]);



  

  const favoriteList = (e) => {
    e.preventDefault();
    if (labelState === "Remover de favoritos") {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) === titles.title) {
          console.log(` repetido `);
          localStorage.removeItem(localStorage.key(i));
          setLabelState("Agregar a favoritos");
        
          if(document.URL.toString().includes("favorite")){
            var myArray = [];
                Object.entries(localStorage).map(([key,value]) => {

                    if((key !== "session"  )){
                    var elementJson = JSON.parse(value);
                    myArray.push(elementJson);
                    }
                }
                    
                    

                );
                setVideoList(myArray);
                console.log(setTitles({title : titles.title,
                    description: titles.description,
                    videoId: titles.videoId,
                    url: titles.url
                    }));
          }

        
        }
      }

      


    } else {
      localStorage.setItem(titles.title, JSON.stringify(titles));
      setLabelState("Remover de favoritos");
     
    
    }
    
  };

  const renderMenu = () => {
    if (localStorage.getItem("session") != null) {
      return (
        <FavoriteButton onClick={favoriteList}>{labelState}</FavoriteButton>
      );
    }
  };

  return <div>{renderMenu()}</div>;
}

export default ButtonAddRemFavorite;
