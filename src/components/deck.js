/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Deck(props) {
  const deckArr = [];
  const { numOfCardsLeft } = props;

  for (let i = 0; i < numOfCardsLeft; i += 1) {
    deckArr.push(
      <li className="card back" key={`deck${i}`} />,
    );
  }

  return (
    <div className="playingCards">
      <ul className="deck">
        {deckArr}
      </ul>
    </div>
  );
}
