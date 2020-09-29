import React from "react";

import { FAVORITES_KEY } from "../../utils/constants";
import { storage } from "../../utils/storage";
import Videos from "../../components/Videos";

const Favorites = ({ onSetActiveVideo }) => {
  const lastFavorites = storage.get(FAVORITES_KEY) || "[]";
  const favorites = JSON.parse(lastFavorites);

  return (
    <section className="favorites">
      {favorites.length > 0 ? (
        <Videos
          onSetActiveVideo={onSetActiveVideo}
          videos={{ items: favorites }}
        />
      ) : (
        <div className="empty-favorites">
          <p>There is no favorite videos yet</p>
        </div>
      )}
    </section>
  );
};

export default Favorites;
