import React, { useRef } from "react";

import { useQueryContext } from "../../components/Layout";
import Videos from "../../components/Videos";

import "./Home.styles.css";

function HomePage() {
  const sectionRef = useRef(null);
  const { queryString } = useQueryContext();

  return (
    <section className="homepage" ref={sectionRef}>
      <Videos searchQuery={queryString} />
      {console.log({ queryString })}
    </section>
  );
}

export default HomePage;
