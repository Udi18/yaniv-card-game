/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import OpponentHand from './opponent-hands';
import PlayerHand from './player-hand';
import Discard from './discard';
import Deck from './deck';

export default function Arrangement(props) {
  const arrangement = [];
  const { opponentCardCount } = props;
  const { playerCount } = props;
  const { numOfCardsLeft } = props;
  const { playerHand } = props;
  const { discardPile } = props;

  switch (playerCount) {
    case 2:
      arrangement.push(
        <div className="container mw-100 h-100" id="game-board" key="pc2">
          <div className="row h-33 align-items-start">
            <div className="col" />
            <div className="col" />
            <div className="col">
              <OpponentHand
                opponentCardCount={opponentCardCount}
                playerCount={playerCount}
                positionFromPlayer={1}
              />
            </div>
            <div className="col" />
            <div className="col" />
          </div>

          <div className="row h-33 align-items-center">
            <div className="col" />
            <div className="col" />
            <div className="col">
              <Deck
                numOfCardsLeft={numOfCardsLeft}
              />
            </div>
            <div className="col">
              <Discard
                discardPile={discardPile}
              />
            </div>
            <div className="col" />
            <div className="col" />
          </div>

          <div className="row h-33 align-items-end">
            <div className="col" />
            <div className="col" />
            <div className="col">
              <PlayerHand
                playerHand={playerHand}
              />
              <div className="player-buttons">
                <ul>
                  <li>
                    <button type="button" className="btn btn-primary">Play Card(s)</button>
                  </li>
                  <li>
                    <button type="button" className="btn btn-secondary">Yaniv!</button>
                  </li>
                  <li>
                    <button type="button" className="btn btn-success">Menu</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col" />
            <div className="col" />
          </div>
        </div>,
      );
      break;

    case 3:
      arrangement.push(
        <div className="container mw-100 h-100" id="game-board" key="pc3">
          <div className="row h-33 align-items-start">
            <div className="col" />
            <div className="col">
              <OpponentHand
                opponentCardCount={opponentCardCount}
                playerCount={playerCount}
                positionFromPlayer={1}
              />
            </div>
            <div className="col" />
            <div className="col">
              <OpponentHand
                opponentCardCount={opponentCardCount}
                playerCount={playerCount}
                positionFromPlayer={2}
              />
            </div>
            <div className="col" />
          </div>

          <div className="row h-33 align-items-center">
            <div className="col" />
            <div className="col" />
            <div className="col">
              <Deck
                numOfCardsLeft={numOfCardsLeft}
              />
            </div>
            <div className="col">
              <Discard
                discardPile={discardPile}
              />
            </div>
            <div className="col" />
            <div className="col" />
          </div>

          <div className="row h-33 align-items-end">
            <div className="col" />
            <div className="col" />
            <div className="col">
              <PlayerHand
                playerHand={playerHand}
              />
              <div className="player-buttons">
                <ul>
                  <li>
                    <button type="button" className="btn btn-primary">Play Card(s)</button>
                  </li>
                  <li>
                    <button type="button" className="btn btn-secondary">Yaniv!</button>
                  </li>
                  <li>
                    <button type="button" className="btn btn-success">Menu</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col" />
            <div className="col" />
          </div>
        </div>,
      );
      break;

    case 4:
      arrangement.push(
        <div className="container mw-100 h-100" id="game-board" key="pc4">
          <div className="row h-33 align-items-start">
            <div className="col" />
            <div className="col" />
            <div className="col">
              <OpponentHand
                opponentCardCount={opponentCardCount}
                playerCount={playerCount}
                positionFromPlayer={2}
              />
            </div>
            <div className="col" />
            <div className="col" />
          </div>

          <div className="row h-33 align-items-center">
            <div className="col left-side">
              <OpponentHand
                opponentCardCount={opponentCardCount}
                playerCount={playerCount}
                positionFromPlayer={1}
              />
            </div>
            <div className="col" />
            <div className="col">
              <Deck
                numOfCardsLeft={numOfCardsLeft}
              />
            </div>
            <div className="col">
              <Discard
                discardPile={discardPile}
              />
            </div>
            <div className="col" />
            <div className="col right-side">
              <OpponentHand
                opponentCardCount={opponentCardCount}
                playerCount={playerCount}
                positionFromPlayer={3}
              />
            </div>
          </div>

          <div className="row h-33 align-items-end">
            <div className="col" />
            <div className="col" />
            <div className="col">
              <PlayerHand
                playerHand={playerHand}
              />
              <div className="player-buttons">
                <ul>
                  <li>
                    <button type="button" className="btn btn-primary">Play Card(s)</button>
                  </li>
                  <li>
                    <button type="button" className="btn btn-secondary">Yaniv!</button>
                  </li>
                  <li>
                    <button type="button" className="btn btn-success">Menu</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col" />
            <div className="col" />
          </div>
        </div>,
      );
      break;

    case 5:
      arrangement.push(
        <div className="container mw-100 h-100" id="game-board" key="pc5">
          <div className="row h-33 align-items-start">
            <div className="col" />
            <div className="col">
              <OpponentHand
                opponentCardCount={opponentCardCount}
                playerCount={playerCount}
                positionFromPlayer={2}
              />
            </div>
            <div className="col" />
            <div className="col">
              <OpponentHand
                opponentCardCount={opponentCardCount}
                playerCount={playerCount}
                positionFromPlayer={3}
              />
            </div>
            <div className="col" />
          </div>

          <div className="row h-33 align-items-center">
            <div className="col left-side">
              <OpponentHand
                opponentCardCount={opponentCardCount}
                playerCount={playerCount}
                positionFromPlayer={1}
              />
            </div>
            <div className="col" />
            <div className="col">
              <Deck
                numOfCardsLeft={numOfCardsLeft}
              />
            </div>
            <div className="col">
              <Discard
                discardPile={discardPile}
              />
            </div>
            <div className="col" />
            <div className="col right-side">
              <OpponentHand
                opponentCardCount={opponentCardCount}
                playerCount={playerCount}
                positionFromPlayer={4}
              />
            </div>
          </div>

          <div className="row h-33 align-items-end">
            <div className="col" />
            <div className="col" />
            <div className="col">
              <PlayerHand
                playerHand={playerHand}
              />
              <div className="player-buttons">
                <ul>
                  <li>
                    <button type="button" id="play-cards" className="btn btn-primary">Play Card(s)</button>
                  </li>
                  <li>
                    <button type="button" id="call-yaniv" className="btn btn-secondary">Yaniv!</button>
                  </li>
                  <li>
                    <button type="button" id="menu" className="btn btn-success">Menu</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col" />
            <div className="col" />
          </div>
        </div>,
      );
      break;

    default:
      break;
  }

  return (
    arrangement
  );
}
