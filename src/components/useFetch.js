import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({items:null, isLoaded:true, hasErrors: false});

    useEffect(() => {
        fetch(url)
          .then(res => res.json())
          .then((result) => {
            setState({
              isLoaded: true,
              items: result.items
            })
          })
          .catch( (error) => {
            setState({
              isLoaded: true,
              hasErrors: error
            });
          })
    }, [url, setState]);

    return state;
}