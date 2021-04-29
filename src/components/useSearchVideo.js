import { useEffect, useState } from "react";

export const useSearchVideo = () => {
    const [searchVideo, setSearchVideo] = useState('');

    const handleChange = event => {
        setSearchVideo(event.target.value);
    }

    useEffect(() => {
        const listener = (event) => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            setSearchVideo(event.target.value);
          }
        };
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        };
      }, []);

    return [searchVideo, handleChange];
}