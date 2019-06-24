import React from 'react';

import Hand from './hand';
import PlayerHand from './player-hand';
import Deck from './deck';

export default function Arrangement ( props ) {
	let arrangement = [];
	let opponentCardCount = props.opponentCardCount;
	let playerCount = props.playerCount;
	let numOfCardsLeft = props.numOfCardsLeft;

	switch ( playerCount ){
		case 2: 
			arrangement.push(
				<div className="container h-100">
					<div className="row h-33 align-items-start">
						<div className="col"></div>
						<div className="col"></div>
						<div className="col">
							<Hand 
								opponentCardCount={opponentCardCount}
								playerCount={playerCount}
								positionFromPlayer={1}
							/>
						</div>
						<div className="col"></div>
						<div className="col"></div>
					</div>
		
					<div className="row h-33 align-items-center">
						<div className="col"></div>
						<div className="col"></div>
						<div className="col">
							<Deck 
								numOfCardsLeft={numOfCardsLeft} 
							/>
						</div>
						<div className="col"></div>
						<div className="col"></div>
						<div className="col"></div>
					</div>
				
					<div className="row h-33 align-items-end">
						<div className="col"></div>
						<div className="col"></div>
						<div className="col">
							<PlayerHand 
								playerHand={props.playerHand}
							/>
						</div>
						<div className="col"></div>
						<div className="col"></div>
					</div>
				</div>
			);
			break;

		case 3: 
			arrangement.push(
				<div className="container h-100">
					<div className="row h-33 align-items-start">
						<div className="col"></div>
						<div className="col">
							<Hand 
								opponentCardCount={opponentCardCount}
								playerCount={playerCount}
								positionFromPlayer={1}
							/>
						</div>
						<div className="col"></div>
						<div className="col">
							<Hand 
								opponentCardCount={opponentCardCount}
								playerCount={playerCount}
								positionFromPlayer={2}
							/>
						</div>
						<div className="col"></div>
					</div>
		
					<div className="row h-33 align-items-center">
						<div className="col"></div>
						<div className="col"></div>
						<div className="col">
							<Deck 
								numOfCardsLeft={numOfCardsLeft} 
							/>
						</div>
						<div className="col"></div>
						<div className="col"></div>
						<div className="col"></div>
					</div>
				
					<div className="row h-33 align-items-end">
						<div className="col"></div>
						<div className="col"></div>
						<div className="col">
							<PlayerHand 
								playerHand={props.playerHand}
							/>
						</div>
						<div className="col"></div>
						<div className="col"></div>
					</div>
				</div>
			);
			break;

		case 4: 
			arrangement.push( 
				<div className="container h-100">
					<div className="row h-33 align-items-start">
						<div className="col"></div>
						<div className="col"></div>
						<div className="col">
							<Hand 
								opponentCardCount={opponentCardCount}
								playerCount={playerCount}
								positionFromPlayer={2}
							/>
						</div>
						<div className="col"></div>
						<div className="col"></div>
					</div>
		
					<div className="row h-33 align-items-center">
						<div className="col">
							<Hand 
								opponentCardCount={opponentCardCount}
								playerCount={playerCount}
								positionFromPlayer={1}
							/>
						</div>
						<div className="col"></div>
						<div className="col">
							<Deck 
								numOfCardsLeft={numOfCardsLeft} 
							/>
						</div>
						<div className="col"></div>
						<div className="col"></div>
						<div className="col">
							<Hand 
								opponentCardCount={opponentCardCount}
								playerCount={playerCount}
								positionFromPlayer={3}
							/>
						</div>
					</div>
				
					<div className="row h-33 align-items-end">
						<div className="col"></div>
						<div className="col"></div>
						<div className="col">
							<PlayerHand 
								playerHand={props.playerHand}
							/>
						</div>
						<div className="col"></div>
						<div className="col"></div>
					</div>
				</div>
			);
			break;

		case 5: 
			arrangement.push( 
				<div className="container h-100">
					<div className="row h-33 align-items-start">
						<div className="col"></div>
						<div className="col">
							<Hand 
								opponentCardCount={opponentCardCount}
								playerCount={playerCount}
								positionFromPlayer={2}
							/>
						</div>
						<div className="col"></div>
						<div className="col">
							<Hand 
								opponentCardCount={opponentCardCount}
								playerCount={playerCount}
								positionFromPlayer={3}
							/>
						</div>
						<div className="col"></div>
					</div>
		
					<div className="row h-33 align-items-center">
						<div className="col">
							<Hand 
								opponentCardCount={opponentCardCount}
								playerCount={playerCount}
								positionFromPlayer={1}
							/>
						</div>
						<div className="col"></div>
						<div className="col">
							<Deck 
								numOfCardsLeft={numOfCardsLeft} 
							/>
						</div>
						<div className="col"></div>
						<div className="col"></div>
						<div className="col">
							<Hand 
								opponentCardCount={opponentCardCount}
								playerCount={playerCount}
								positionFromPlayer={4}
							/>
						</div>
					</div>
				
					<div className="row h-33 align-items-end">
						<div className="col"></div>
						<div className="col"></div>
						<div className="col">
							<PlayerHand 
								playerHand={props.playerHand}
							/>
						</div>
						<div className="col"></div>
						<div className="col"></div>
					</div>
				</div>
			);
			break;

		default:
			break;
	};

	return arrangement;
};
