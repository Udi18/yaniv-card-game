"use strict";

class Game {
  	constructor(id, players, deck){
		this.id = id;
    this.players = players;
    this.deck = deck;
  	}
  
  newGame(){
    //shuffle new deck into draw pile
    this.deck.newShuffle();
    
    for(let i = 0; i < 5; i++){
      for(let j = 0; j < this.players.length; j++){
        this.players[j].drawCard();
      }	
    }
  }
}

module.exports = Game;