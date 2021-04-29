import React, { useContext}from "react";
import {VideoItems, Parag, TitleVideo, Secondary, IMG, Image, TitleBox} from './components/VideoPlayer.js';
import { useHistory  } from "react-router-dom";
import SearchContext from './GlobalVars/SearchContext';




function ListVideos({title, description,url, videoId}) {
    const {setTitles} = useContext(SearchContext);
    const {videoList,setVideoList} = useContext(SearchContext);

      let history = useHistory();
      
      

      function  playVideo(event) {

        if(!document.URL.toString().includes("favorite")){
        history.push(`/${videoId}`);
        console.log(title);
        setTitles({title : title,
            description: description,
            videoId: videoId,
            url: url });
        } else{
            history.push(`/favorite/${videoId}`);

            var myArray = [];
                Object.entries(localStorage).map(([key,value]) => {

                    if((key !="session"  )){
                    var elementJson = JSON.parse(value);
                    myArray.push(elementJson);
                    }
                }
                    
                    

                );
                setVideoList(myArray);
                console.log(setTitles({title : title,
                    description: description,
                    videoId: videoId,
                    url: url
                    }));

        }
        
        }

        
    
    return (
       
        <VideoItems  id='aa' onClick={playVideo} >
           <Image id='imag'> 
               <IMG src={url} alt="video"/>
               </Image> 
           <TitleBox>
           <TitleVideo>{title}</TitleVideo>
           </TitleBox>  
        </VideoItems>
        
    );
} 

export default ListVideos;