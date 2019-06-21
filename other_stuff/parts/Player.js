"use strict";
const _ = require('lodash');


module.exports = class Player {
  constructor(name, deck){
    this.name = name;
    this.hand = [];
    this.deck = deck;
    this.dealerStatus = false;
    this.handValue = 0;
    this.cardValues = {};
  }

  displayHand(){
    return this.hand;
  }

  createCardValues(){
    const newDeck = this.deck.newDeck();
    const cardValues = {};
    newDeck.forEach(card => {
      if(card < 53){
        let value = (card % 13 > 10) ? 10 : card % 13;
        cardValues.card = value;
      } else {
        let value = 15;
        cardValues.card = value;
      }
    });
    this.cardValues = cardValues;
    return cardValues;
  }

  sumHandValue(){
    this.createCardValues();
    console.log(this.cardValues);
    let sum = this.hand.reduce((acc, card) => acc += this.cardValues[card]);
    return sum;
  }

  drawCard(){
    this.hand.push(this.deck.dispenseCard());
  }

  selectCard(card){
    _.pull(this.deck.discardPile, card);
    this.hand.push(card);
  }

  playCards(cards){
    this.deck.receiveCards(cards);
    this.hand = this.hand.filter(card => !cards.includes(card));
  }
}