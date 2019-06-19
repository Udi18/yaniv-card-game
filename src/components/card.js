import React from 'react';

let mockCardObj = {
	0 : {
		rank: "q",
		suit: "hearts",
		symbol: "Q",
	},
	1 : {
		rank: "q",
		suit: "clubs",
		symbol: "Q",
	},
	2 : {
		rank: "q",
		suit: "spades",
		symbol: "Q",
	},
	3 : {
		rank: "4",
		suit: "hearts",
		symbol: "4",
	},
	4 : {
		rank: "a",
		suit: "diams",
		symbol: "A",
	},
}

let mockHandArr = [ 42, 23, 1, 28, 19 ]

//Clubs, Diamonds, Hearts, Spades
//A 2 3 4 5 6 7 8 9 10 J Q K 
// Joker Joker
let _cards = [
	{
		rank: "a",
		suit: "clubs",
		symbol: "A"
	},{
		rank: "2",
		suit: "clubs",
		symbol: "2"
	},{
		rank: "3",
		suit: "clubs",
		symbol: "3"
	},{
		rank: "4",
		suit: "clubs",
		symbol: "4"
	},{
		rank: "5",
		suit: "clubs",
		symbol: "5"
	},{
		rank: "6",
		suit: "clubs",
		symbol: "6"
	},{
		rank: "7",
		suit: "clubs",
		symbol: "7"
	},{
		rank: "8",
		suit: "clubs",
		symbol: "8"
	},{
		rank: "9",
		suit: "clubs",
		symbol: "9"
	},{
		rank: "10",
		suit: "clubs",
		symbol: "10"
	},{
		rank: "j",
		suit: "clubs",
		symbol: "J"
	},{
		rank: "q",
		suit: "clubs",
		symbol: "Q"
	},{
		rank: "k",
		suit: "clubs",
		symbol: "K"
	},{
		rank: "a",
		suit: "diams",
		symbol: "A"
	},{
		rank: "2",
		suit: "diams",
		symbol: "2"
	},{
		rank: "3",
		suit: "diams",
		symbol: "3"
	},{
		rank: "4",
		suit: "diams",
		symbol: "4"
	},{
		rank: "5",
		suit: "diams",
		symbol: "5"
	},{
		rank: "6",
		suit: "diams",
		symbol: "6"
	},{
		rank: "7",
		suit: "diams",
		symbol: "7"
	},{
		rank: "8",
		suit: "diams",
		symbol: "8"
	},{
		rank: "9",
		suit: "diams",
		symbol: "9"
	},{
		rank: "10",
		suit: "diams",
		symbol: "10"
	},{
		rank: "j",
		suit: "diams",
		symbol: "J"
	},{
		rank: "q",
		suit: "diams",
		symbol: "Q"
	},{
		rank: "k",
		suit: "diams",
		symbol: "K"
	},{
		rank: "a",
		suit: "hearts",
		symbol: "A"
	},{
		rank: "2",
		suit: "hearts",
		symbol: "2"
	},{
		rank: "3",
		suit: "hearts",
		symbol: "3"
	},{
		rank: "4",
		suit: "hearts",
		symbol: "4"
	},{
		rank: "5",
		suit: "hearts",
		symbol: "5"
	},{
		rank: "6",
		suit: "hearts",
		symbol: "6"
	},{
		rank: "7",
		suit: "hearts",
		symbol: "7"
	},{
		rank: "8",
		suit: "hearts",
		symbol: "8"
	},{
		rank: "9",
		suit: "hearts",
		symbol: "9"
	},{
		rank: "10",
		suit: "hearts",
		symbol: "10"
	},{
		rank: "j",
		suit: "hearts",
		symbol: "J"
	},{
		rank: "q",
		suit: "hearts",
		symbol: "Q"
	},{
		rank: "k",
		suit: "hearts",
		symbol: "K"
	},{
		rank: "a",
		suit: "spades",
		symbol: "A"
	},{
		rank: "2",
		suit: "spades",
		symbol: "2"
	},{
		rank: "3",
		suit: "spades",
		symbol: "3"
	},{
		rank: "4",
		suit: "spades",
		symbol: "4"
	},{
		rank: "5",
		suit: "spades",
		symbol: "5"
	},{
		rank: "6",
		suit: "spades",
		symbol: "6"
	},{
		rank: "7",
		suit: "spades",
		symbol: "7"
	},{
		rank: "8",
		suit: "spades",
		symbol: "8"
	},{
		rank: "9",
		suit: "spades",
		symbol: "9"
	},{
		rank: "10",
		suit: "spades",
		symbol: "10"
	},{
		rank: "j",
		suit: "spades",
		symbol: "J"
	},{
		rank: "q",
		suit: "spades",
		symbol: "Q"
	},{
		rank: "k",
		suit: "spades",
		symbol: "K"
	}
]

let cardDescObj = [];

console.log("this is mockCardObj", mockCardObj)

for(let i = 0; i < mockHandArr.length; i++){
	let symbolID = String;

	switch (_cards[mockHandArr[i]]){
		case "diams":
			symbolID = "\u2666"
			break;
		case "hearts":
			symbolID = "\u2665"
			break;
		case "clubs":
			symbolID = "\u2663"
			break;
		case "spades":
			symbolID = "\u2660"
			break;
		default:
			break;
	}

	cardDescObj.push({
		labelCN : `card rank-${_cards[mockHandArr[i]].rank} ${_cards[mockHandArr[i]].suit}`,
		spanCNrank : `${_cards[mockHandArr[i]].symbol}`,
		spanCNsuit : symbolID
	})
}
// for(let i = 0; i < Object.keys(mockCardObj).length; i++){
// 	let symbolID = String;

// 	switch (mockCardObj[i].suit){
// 		case "diams":
// 			symbolID = "\u2666"
// 			break;
// 		case "hearts":
// 			symbolID = "\u2665"
// 			break;
// 		case "clubs":
// 			symbolID = "\u2663"
// 			break;
// 		case "spades":
// 			symbolID = "\u2660"
// 			break;
// 		default:
// 			break;
// 	};
		

// 	cardDescObj.push({
// 		labelCN : `card rank-${mockCardObj[i].rank} ${mockCardObj[i].suit}`,
// 		spanCNrank : `${mockCardObj[i].symbol}`,
// 		spanCNsuit : symbolID
// 	})
// }

console.log("this is cardDescObj",cardDescObj)

let cards = [];

for(let i = 0; i < cardDescObj.length; i++){
	cards.push(
		<li key={i}>
			<label className={cardDescObj[i].labelCN}>
				<span className="rank">{cardDescObj[i].spanCNrank}</span>
				<span className="suit">{cardDescObj[i].spanCNsuit}</span>
			</label>
		</li>
	)
}

console.log("this is cards", cards)
	
export default function Card () {
	return (
		<div className="playingCards faceImages">
			<ul className="hand">
				{cards}
			</ul>
    	</div>
	)
}