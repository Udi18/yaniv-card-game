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
let cardDescObj = [];

console.log("this is mockCardObj", mockCardObj)
for(let i = 0; i < Object.keys(mockCardObj).length; i++){
	let symbolID = String;

	switch (mockCardObj[i].suit){
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
	};
		

	cardDescObj.push({
		labelCN : `card rank-${mockCardObj[i].rank} ${mockCardObj[i].suit}`,
		spanCNrank : `${mockCardObj[i].symbol}`,
		spanCNsuit : symbolID
	})
}

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