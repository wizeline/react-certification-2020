import React from "react";

import { FAVORITES_KEY } from "../../utils/constants";
import { storage } from "../../utils/storage";
import Videos from "../../components/Videos";

const Favorites = ({ onSetActiveVideo }) => {
  const lastFavorites = storage.get(FAVORITES_KEY) || "[]";
  const favorites = JSON.parse(lastFavorites);

  return (
    <section className="favorites">
      <Videos
        onSetActiveVideo={onSetActiveVideo}
        videos={{ items: favorites }}
      />
    </section>
  );
};

export default Favorites;
