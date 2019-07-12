import React, {
	useState,
	useEffect
} from 'react';

import './css/bootstrap.css';
import './css/cards-ie.css';
import './css/cards-ie9.css';
import './css/cards.css';
import './css/App.css';

import { playerActions } from './api';
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



export default function App() {
	let [yanivObj, setYanivObj] = useState({
		playerName: "Earle",
		playerCount: 5,
		playerHand: [12, 17, 1, 28, 19],
		opponentCardCount: [5, 2, 5, 2],
		numOfCardsLeft: 12,
		discardPile: [],
		playerTurn: undefined,
		playerNum: undefined,
		selectedCardState: []
	});
	
	let drawCard = ( p ) => {
		console.log(p + " is drawing a card.");
		playerActions('action', ( p ) => {
		});
	};

	let playCards = ( p, c ) => {
		console.log(p + " is playing card(s) " + c);
		playerActions('action', ( p, c ) => {
		});
	};

	useEffect(() => {
		let playerHandElement = document.querySelectorAll("label");
		let deckElement = document.getElementsByClassName("deck");
		let topDeckCard = deckElement[0].lastChild;
		let selectedCards = [];

		topDeckCard.addEventListener('click', () => {
			drawCard(yanivObj.playerName);
		})
		topDeckCard.classList.add('draw-card')

		playerHandElement.forEach((card) => {
			let cardNum = card.id;
			let selecting = false;

			//raise card if hovering it
			card.parentElement.addEventListener('mouseenter', () => {
				card.classList.add('hovering');
			});

			//select card on click and keep it raised
			card.parentElement.addEventListener('click', () => {
				console.log(cardNum);
				if (selecting === false) {
					selecting = true;
					card.classList.add('selecting');
					selectedCards.push(+cardNum);
				} else {
					selecting = false;
					let index = selectedCards.findIndex((e) => {
						return e === +cardNum;
					});
					card.classList.remove('selecting');
					selectedCards.splice(index, 1);
				};
				console.log(yanivObj);
				setYanivObj(prevYanivObj => {
					let state = { ...prevYanivObj }
					state.selectedCardState = selectedCards
					return state;
				});
			});

			if (!selecting) {
				card.parentElement.addEventListener('mouseleave', () => {
					card.classList.remove('hovering');
				});
			};
		});
	}, []);
	

	return <Arrangement
	playerCount = {
		yanivObj.playerCount
	}
	playerHand = {
		yanivObj.playerHand
	}
	opponentCardCount = {
		yanivObj.opponentCardCount
	}
	numOfCardsLeft = {
		yanivObj.numOfCardsLeft
	}
	playCards = {
		playCards
	}
	selectedCards = {
		yanivObj.selectedCards
	}
	/>
};