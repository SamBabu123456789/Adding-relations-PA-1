import React from 'react';

const DestinationCard = ({ destination }) => {
  return (
    <div>
      <img  src={destination.image} alt={destination.name} />
      <div>
        <h2>{destination.name}</h2>
        <p>{destination.location}</p>
        <p>{destination.description}</p>
        <p>{destination.price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;