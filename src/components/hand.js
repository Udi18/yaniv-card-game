import React from 'react';
import Card from './card';

function Hand({ handDescribingObject }) {
	//the argument needs player ID, card number, number of cards,
	var hand = [];
	let numOfCardsInHand;


	for( let i = 0; i < numOfCardsInHand; i++){
		hand.push(<Card key={i} />)
	}

	
  return (
    <div className="playingCards faceImages">
		<Card />
    </div>
  )
};

export default Hand;
