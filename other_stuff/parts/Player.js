"use strict";

class Player {
  constructor(name, deck){
    this.name = name;
    this.hand = [];
    this.deck = deck;
    this.dealerStatus = false; 
  }

  displayHand(){
    return this.hand;
  }

  drawCard(){
    this.hand.push(this.deck.dispenseCard());
  }

  playCards(cards){
    this.deck.receiveCards(cards);
    this.hand = this.hand.filter(card => !cards.includes(card));
  }
}

module.exports = Player;

