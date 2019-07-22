import React from 'react';
import Card from '../controllers/card';

export default function Discard ( props ) {
	let discardPile = props.discardPile;

	return (
		<div className="playingCards rotateHand">
			<ul className="hand">
				<Card 
					discardPile={discardPile}
				/>
			</ul>
		</div>
	);
};