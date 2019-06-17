"use strict";
const Player = require('./Player.js');
const Deck = require('./Deck.js');

class Game {
  	constructor(id, players, deck){
		this.id = id;
    this.players = players;
    this.deck = deck;
  	}
  
  	newGame(){
	  //Create players
		const deck = new Deck();
    deck.newShuffle();
		for(let i = 0; i < this.players.length; i++){
			this.players[i] = new Player(this.players[i], deck);
			console.log(this.players[i]);
			for(let i = 0; i < 5; i++){
				this.players[i].drawCard();
			}	
		}
	}
}

module.exports = Game;