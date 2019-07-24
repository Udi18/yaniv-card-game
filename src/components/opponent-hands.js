/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

export default function OpponentHand(props) {
  const handArr = [];
  const { opponentCardCount } = props;
  const { positionFromPlayer } = props;

  for (let i = 0; i < opponentCardCount[positionFromPlayer - 1]; i += 1) {
    handArr.push(
      <li className="card back" key={`${positionFromPlayer} hand ${i}`} />,
    );
  }

  return (
    <div className="playingCards faceImages">
      <ul className="hand">
        {handArr}
      </ul>
    </div>
  );
}
