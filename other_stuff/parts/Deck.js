const shuffle = require('shuffle-array');


class Deck {
  constructor(){
    this.drawPile = [];
    this.discardPile = [];
    this.lastPlayed = [];
  }

  //Creates a new deck.
  newDeck(){
    const unShuffledDeck = [];
    for(let i = 0; i < 54; i++){
      unShuffledDeck.push(i);
    }
    return unShuffledDeck;
  }
  
  //Shuffles new deck into draw pile.
  newShuffle(){
    this.drawPile = shuffle(this.newDeck());
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

module.exports = Deck;