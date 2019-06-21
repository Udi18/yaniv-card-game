const Deck = require('./parts/Deck.js');
const Player = require('./parts/Player.js');
const Game = require('./parts/Game.js');

const playerArr = ['Udi', 'Mona', 'Earle', 'Lily', 'Margarita', 'Arianna'];
const deck = new Deck();
const players = playerArr.map(player => player = new Player(`${player}`, deck));
const game = new Game(123, players, deck);
game.newGame();
players[0].drawCard();
players[0].playCards([players[0].hand[0]]);
players[1].drawCard();
players[1].playCards([players[1].hand[0]]);
players[2].selectCard(deck.lastPlayed[0]);
players[2].playCards([players[2].hand[3]]);
console.log(game);
for(let i = 0; i < players.length; i++){
  console.log(`${players[i].name} has ${players[i].hand} cards.`);
}
console.log(`Deck has: ${deck.drawPile.length}`);
console.log(`Discard has: ${deck.discardPile.length}`);

console.log(players[2].hand);
console.log(players[2].createCardValues());
