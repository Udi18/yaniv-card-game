import React from 'react';

let numOfCardsLeft = 27; //This value will come from backend.

let deckArr = [];

export default function Deck () {
	for(let i = 0; i < numOfCardsLeft; i++){
		deckArr.push(
			<li className="card back"></li>
		)
	}

	return (
		<div className="playingCards">
			<ul className="deck">
				{deckArr}
			</ul>
		</div>
	)
}