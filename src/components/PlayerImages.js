import React from 'react';
import { Link } from 'react-router-dom';

// loop over an image file and display images here
export const PlayerImages = ({ image, name, id }) => {
  return (
    <div className="playerCard">
      <Link to={`/players/${id}`} className="playerName">
        {name ?? 'Name Not Available'}
      </Link>
      <img src={image} alt={name ?? 'player'} width={300} />
    </div>
  );
};
