// import React, { useContext} from "react";
// import SearchContext from '../GlobalVars/SearchContext';

// const CreateArray = () =>{

//     const [favoriteItems, setFavoriteItems] = useContext(SearchContext);

//     for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage.key(i) !== 'session') {
//             var retrieveJSON = localStorage.getItem(localStorage.key(i));
//             var arrObj = JSON.parse(retrieveJSON);
//             console.log("title: "+ JSON.stringify(arrObj));
//             setFavoriteItems([...favoriteItems, JSON.stringify(arrObj)]);
//         }
//     }

// }

// export default CreateArray;