import React from 'react';

import './css/bootstrap.css';
import './css/cards-ie.css';
import './css/cards-ie9.css';
import './css/cards.css';
import './css/App.css';

import Arrangement from './components/arrangement';

let yanivObj = {
	playerCount : 5,
	playerHand : [ 42, 53, 1, 28, 19 ],
	opponentCardCount : [ 1, 2, 4, 2 ],
	numOfCardsLeft : 12
};

export default function App () {
	return <Arrangement 
		playerCount={yanivObj.playerCount}
		playerHand={yanivObj.playerHand}
		opponentCardCount={yanivObj.opponentCardCount}
		numOfCardsLeft={yanivObj.numOfCardsLeft}
	/>
};
