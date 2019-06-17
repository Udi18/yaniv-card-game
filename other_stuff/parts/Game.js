"use strict";
const Player = require('Player');
const Deck = require('Deck');

class Game {
  	constructor(id, players){
		this.id = id;
		this.players = players;
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

let game = new Game(1, ['Udi', 'Mona', 'Earle', 'Lily', 'Margarita', 'Arianna']);

game.newGame();

console.log(game, "game");