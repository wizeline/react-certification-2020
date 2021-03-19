import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({items:null, isLoaded:false, hasErrors: false});

    useEffect( () => {
      const fetchData = async () => {
        setState({
          isLoaded: true,
        });
        try {
          const res = await fetch(url);
          const json = await res.json();
          setState({
            isLoaded: false,
            items: json.items
          });
        } catch (error) {
          setState({
            isLoaded: true,
            hasErrors: error
          });
        }
      };
      fetchData();
    }, [url, setState]);

    return state;
}