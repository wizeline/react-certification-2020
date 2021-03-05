import React from 'react';
// PropTypes
import PropTypes from 'prop-types';

const Visualizer = ({ id }) => {
  return (
    <>
      {id && (
        <iframe
          title={id}
          data-testid="video-frame"
          width="100%"
          height="500"
          allowFullScreen
          frameBorder="0"
          src={`https://www.youtube.com/embed/${id}?controls=0&autoplay=0`}
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        />
      )}
    </>
  );
};

Visualizer.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Visualizer;
