/* eslint-disable react/jsx-filename-extension */

import React, { useState, useEffect } from 'react';
import Arrangement from './components/arrangement';
import { playerActions } from './api';

// All CSS imports
import './css/bootstrap.css';
import './css/cards-ie.css';
import './css/cards-ie9.css';
import './css/cards.css';
import './css/App.css';

/* TODO overall list
 **  convert drilled props to context hooks
 **  create discard pile component
 **  create function to maintain correct turn positions for each player
 **  integrate socket.io to communicate with a backend (test connecting to nodejs)
 **DONE****  remove CSS hover functionality
 **DONE****  create ES6 functionality to control hover, and card selection
 **DONE****  create functions to tell backend what user is doing
 */

 

export default function App() {
  const [yanivObj, setYanivObj] = useState({
    playerName: 'Earle',
    playerCount: 5,
    playerHand: [12, 17, 1, 28, 19],
    opponentCardCount: [5, 2, 5, 2],
    numOfCardsLeft: 12,
    discardPile: [],
    playerTurn: undefined,
    playerNum: 1,
    selectedCardState: [],
  });

  // handle clicking the deck
  const drawCard = () => {
    const { playerName } = yanivObj;
    console.log(`${playerName} is drawing a card.`);
    playerActions('action', () => {

    });
    // drawing a card will also need to add the same eventListeners
    // that other cards in player's hand have.
    // (startHovering, stopHovering, selectCard)
  };

  // handle clicking the play cards button
  const playCards = () => {
    const { playerNum } = yanivObj;
    const cards = () => {
      const arr = [];
      const cardsState = yanivObj.selectedCardState;

      cardsState.map((card) => {
        arr.push(card);
        return null;
      });
      return arr;
    };
    console.log(yanivObj);
    console.log(`Player #${playerNum} is playing card(s) ${cards()}`);
    playerActions('action', () => {

    });
    setYanivObj(() => {
      const newYanivObj = yanivObj;
      newYanivObj.discardPile = cards();
      return newYanivObj;
    });
  };


  // handle clicking the Yaniv! button
  const callYaniv = () => {
    const { playerName } = yanivObj;
    const hand = yanivObj.playerHand;
    console.log(`${playerName} is calling Yaniv with ${hand}`);
    playerActions('action', () => {

    });
  };

  let stopHovering;
  let startHovering;
  let selectCard;

  // DOMContentLoaded will fire once component is mounted, and start game logic
  // and event listeners
  document.addEventListener('DOMContentLoaded', () => {
    const playerHandElement = document.querySelectorAll('label');
    const deckElement = document.getElementsByClassName('deck');
    const playCardsButton = document.getElementById('play-cards');
    const yanivButton = document.getElementById('call-yaniv');
    const gameBoard = document.getElementById('game-board');
    const menuButton = document.getElementById('menu');
    const topDeckCard = deckElement[0].lastChild;
    const selectedCards = [];

    // listens to when the deck is clicked, adds class for pointer
    topDeckCard.addEventListener('click', drawCard);
    topDeckCard.classList.add('draw-card');

    // listens to what is being done to cards in player's hand
    playerHandElement.forEach((card) => {
      const cardNum = card.id;
      let selecting = false;

      // raise card if hovering it
      startHovering = () => {
        card.classList.add('hovering');
      };
      card.parentElement.addEventListener('mouseenter', startHovering);

      // select card on click and keep it raised
      selectCard = () => {
        if (selecting === false) {
          selecting = true;
          card.classList.add('selecting');
          selectedCards.push(+cardNum);
        } else {
          selecting = false;
          const index = selectedCards.findIndex(e => e === +cardNum);
          card.classList.remove('selecting');
          selectedCards.splice(index, 1);
        }
        setYanivObj((prevYanivObj) => {
          const newYanivObj = prevYanivObj;
          newYanivObj.selectedCardState = selectedCards;
          return newYanivObj;
        });
        console.log('yanivObj', yanivObj);
        console.log('selectedCards', selectedCards);
      };
      card.parentElement.addEventListener('click', selectCard);

      stopHovering = () => {
        card.classList.remove('hovering');
      };
      if (!selecting) {
        card.parentElement.addEventListener('mouseleave', stopHovering);
      }
    });

    // listens to the game buttons being pressed
    playCardsButton.addEventListener('click', playCards);
    yanivButton.addEventListener('click', callYaniv);

    return () => {
      // cleans up eventListeners when game is done.
      topDeckCard.removeEventListener('click', drawCard);
      playerHandElement.forEach((card) => {
        card.parentElement.removeEventListener('mouseenter', startHovering);
        card.parentElement.removeEventListener('click', selectCard);
        card.parentElement.removeEventListener('mouseleave', stopHovering);
      });
    };
  });


  return (
    <Arrangement
      playerCount={
        yanivObj.playerCount
      }
      playerHand={
        yanivObj.playerHand
      }
      opponentCardCount={
        yanivObj.opponentCardCount
      }
      numOfCardsLeft={
        yanivObj.numOfCardsLeft
      }
      selectedCards={
        yanivObj.selectedCards
      }
      discardPile={
        yanivObj.discardPile
      }
    />
  );
}
