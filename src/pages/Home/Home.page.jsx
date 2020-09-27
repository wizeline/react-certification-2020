import React, { useRef } from "react";

import { useYouTubeAPI } from "../../utils/hooks/useYouTube";
import { useQueryContext } from "../../components/Layout";
import Videos from "../../components/Videos";

import "./Home.styles.css";

const HomePage = ({ onSetActiveVideo }) => {
  const sectionRef = useRef(null);
  const { queryString } = useQueryContext();
  const { videos } = useYouTubeAPI(queryString);

  return (
    <section className="homepage" ref={sectionRef}>
      <Videos onSetActiveVideo={onSetActiveVideo} videos={videos} />
      {console.log({ queryString })}
    </section>
  );
};

export default HomePage;
