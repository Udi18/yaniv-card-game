import React from 'react';
import Card from '../controllers/card';

export default function PlayerHand ( props ) {
	let playerHand = props.playerHand;

	return (
		<div className="playingCards faceImages">
			<ul className="hand">
				<Card 
					playerHand={playerHand} 
				/>
			</ul>
		</div>
	);
};
