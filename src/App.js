import React from 'react';

import './css/bootstrap.css';
import './css/cards-ie.css';
import './css/cards-ie9.css';
import './css/cards.css';
import './css/App.css';

import Arrangement from './components/arrangement';

/* TODO overall list
**  convert drilled props to context hooks
**  create discard pile component
**  create function to maintain correct turn positions for each player
**  integrate socket.io to communicate with a backend (test connecting to nodejs)
**  remove CSS hover functionality
**  create ES6 functionality to control hover, and card selection
**  create functions to tell backend what user is doing
*/

let yanivObj = {
	playerCount : 4,
	playerHand : [ 42, 17, 1, 28, 19 ],
	opponentCardCount : [ 5, 2, 5, 2 ],
	numOfCardsLeft : 12,
	discardPile : [],
};

export default function App () {
	return <Arrangement 
		playerCount={yanivObj.playerCount}
		playerHand={yanivObj.playerHand}
		opponentCardCount={yanivObj.opponentCardCount}
		numOfCardsLeft={yanivObj.numOfCardsLeft}
	/>
};
