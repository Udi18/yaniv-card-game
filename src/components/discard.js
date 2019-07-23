/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Card from '../controllers/card';


export default function Discard(props) {
  const { discardPile } = props;

  return (
    <div className="playingCards rotateHand">
      <ul className="hand">
        <Card
          discardPile={discardPile}
        />
      </ul>
    </div>
  );
}
