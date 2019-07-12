import React from 'react';

export default function Deck ( props ) {
	let deckArr = [];
	let numOfCardsLeft = props.numOfCardsLeft;

	for(let i = 0; i < numOfCardsLeft; i++){
		deckArr.push(
			<li className="card back" key={"deck" + i}></li>
		);
	};

	return (
		<div className="playingCards">
			<ul className="deck">
				{deckArr}
			</ul>
		</div>
	);
};
