"use strict";
const shuffle = require('shuffle-array');


class Deck {
  constructor(){
    this.drawPile = [];
    this.discardPile = [];
    this.lastPlayed = [];
  }

  //Shuffles all cards in to draw pile.

  newShuffle(){
    const unShuffledDeck = [];
    for(let i = 0; i < 54; i++){
      unShuffledDeck.push(i);
    }
    this.drawPile = shuffle(unShuffledDeck);
  }

  //Shuffles discard pile in to draw pile.
  shuffleDiscardPile(){
    this.drawPile = shuffle(this.discarPile);
  }

  //Returns card from top of draw pile.
  dispenseCard(){
    let card = undefined;
    card = this.drawPile.pop();
    return card;
  }
  
  //Adds card to top of discard pile.
  receiveCards(cards){
    cards.forEach( card => {
      this.discardPile.push(card);
    })
    this.lastPlayed = [];
    if(cards.length > 1){
      this.lastPlayed.push(cards.shift());
      this.lastPlayed.push(cards.pop());
    } else this.lastPlayed.push(cards[0]);
  }

  getLastPlayed(){
    return this.lastPlayed;
  }
}

const deck = new Deck();

// deck.newShuffle();
deck.newShuffle();
// deck.receiveCards([5]);
// deck.receiveCards([7,8,9]);
let hand = [];
while(hand.length < 6){
  hand.push(deck.dispenseCard());
}

deck.receiveCards([hand[0]]);

export default Deck;