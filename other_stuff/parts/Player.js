const _ = require('lodash');

class Player {
  constructor(name, deck, game){
    this.name = name;
    this.game = game;
    this.hand = [4];
    this.deck = deck;
    this.dealerStatus = false; 
    this.score = null;
  }

  displayHand(){
    return this.hand;
  }

  drawCard(){
    this.hand.push(this.deck.dispenseCard());
    this.game.setEndTurn();
  }

  yaniv(){
    if(this.calculateScore() < 8){
      this.game.callYaniv();
    }
  }

  selectCard(card){
    _.pull(this.deck.discardPile, card);
    this.hand.push(card);
  }
  
  playCards(cards){
    if(this.validPlay(cards)){
      this.deck.receiveCards(cards);
      this.hand = this.hand.filter(card => !cards.includes(card));
    }
  }
  
  validPlay(cards){
    cards.sort((a, b) => a - b);
    return true;
  }
  
  calculateScore(){
    const score = this.hand.reduce((acc, card) =>{
      let value = undefined;
      if(card > 52){
        value = 15;
        acc+=value;
        return acc;
      }else if(card % 13 > 9){
        value = 10;
        acc+=value;
        return acc;
      }else{
        value = (card % 13) + 1;
        acc+=value;
        return acc;
      }
    })
    this.score = score;
    return score;
  }
  
  getScore(){
    return this.score;
  }
  
  console(){
    console.log(this.game);
  }
}

module.exports = Player;