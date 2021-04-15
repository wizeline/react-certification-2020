import  { createContext } from "react";

 const SearchContext = createContext({
    valueFinal: 'wizeline',
    setValueFinal: (value) => {}
});

export default SearchContext;