const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const app = express();
const server = http.Server(app);
const io = socketio(server);

const Deck = require('./parts/Deck.js');
const Game = require('./parts/Game.js');


const players = ['Udi', 'Mona', 'Earle', 'Lily', 'Margarita', 'Arianna'];
const gameID = 123;

const playYaniv = (playersArr, gameIDCode) => {
  const deck = new Deck();
  const game = new Game(gameIDCode, playersArr, deck);
  game.newGame(game);
  const connections = [null, null];
  
  io.on('connection', function(socket){
    let playerIndex = -1;
    for(let i in connections) {
      if (connections[i] === null) {
        playerIndex = i;
      }
    }
    socket.emit('player-number', playerIndex);
  
    if(playerIndex == -1) return;
  
    connections[playerIndex] = socket;
  
    socket.broadcast.emit('player-connect', playerIndex);
  
    socket.on('action', (data) => {
      const request = eval `${data}`;
  
      socket.broadcast.emit('request', request);
  });
  socket.on('disconnect', function() {
    console.log(`Player ${playerIndex} Disconnected`);
    connections[playerIndex] = null;
  });
  });
}


console.log(players[2].hand);
console.log(players[2].sumHandValue());