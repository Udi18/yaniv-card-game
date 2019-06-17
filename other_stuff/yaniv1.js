const Deck = require('./parts/Deck.js');
const Player = require('./parts/Player.js');
const Game = require('./parts/Game.js');



let game = new Game(1, ['Udi', 'Mona', 'Earle', 'Lily', 'Margarita', 'Arianna']);
game.newGame();
console.log(game);
