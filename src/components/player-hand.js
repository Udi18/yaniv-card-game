/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../controllers/card';

export default function PlayerHand(props) {
  const { playerHand } = props;

  return (
    <div className="playingCards faceImages">
      <ul className="hand">
        <Card
          playerHand={playerHand}
        />
      </ul>
    </div>
  );
}
