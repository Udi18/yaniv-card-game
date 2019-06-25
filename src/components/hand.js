import React from 'react';

export default function Hand ( props ) {
	let handArr = [];
	let opponentCardCount = props.opponentCardCount;
	let positionFromPlayer = props.positionFromPlayer;
	let playerCount = props.playerCount;

	for(let i = 0; i < opponentCardCount[positionFromPlayer - 1]; i++){
		handArr.push(
			<li className="card back" key={positionFromPlayer + "hand" + i}></li>
		);
	};

	let rightHandAdjust = {
		right : `calc(opponentCardCount[${positionFromPlayer} - 1] * 1.9em)`
	};

	console.log(opponentCardCount[positionFromPlayer - 1] * 1.9)

	console.log(rightHandAdjust)
	console.log(opponentCardCount)
	console.log(playerCount, positionFromPlayer)

	if ((playerCount === 4 && positionFromPlayer === 3)||(playerCount === 5 && positionFromPlayer === 4)) {
		return (
			<div className="playingCards faceImages">
				<ul className="hand" style={rightHandAdjust}>
					{handArr}
				</ul>
			</div>
		)
	} else {
		return (
			<div className="playingCards faceImages">
				<ul className="hand">
					{handArr}
				</ul>
			</div>
		);
	};
};
