const Player = require('./Player.js');

class Game {
  constructor(id, players, deck){
		this.id = id;
    this.players = players;
    this.deck = deck;
    this.playerTurn = undefined;
    this.endTurn = false;
    this.dealer = undefined;
    this.yaniv = false;
    this.game = this;
  }
  

  newGame(){
    // shuffle new deck into draw pile
    this.deck.newShuffle();
    this.players = this.players.map(player => player = new Player(`${player}`, this.deck, this.game));    
    // for(let i = 0; i < 5; i++){
    //   for(let j = 0; j < this.players.length; j++){
    //     this.players[j].drawCard();
    //   }	
    // }
    // while(this.yaniv === false){
    //   for(let j = 0; j < this.players.length; j++){
    //     this.dealer = this.players[j].name;
    //     for(let i = 0; i < this.players.length; i++){
    //       if(this.yaniv === false){
    //         this.enexport default//         this.plexport defaultplayers[i];
    //         // while(this.endTurn === false){
    //         //   //connection
    //         // }
    //         for(let k = 0; k < 6; k++){
    //           alert(`${this.players[i]} \n`);
    //         }
    //       }
    //     }
    //   }
    // }
  }

  getDealer(){
    return this.dealer;
  }

  callYaniv(){
    this.yaniv = true;
  }

  setEndTurn(){
    return this.endTurn;
  }
}

module.exports = Game;