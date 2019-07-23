/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-underscore-dangle */
import React from 'react';

export default function Card(props) {
  // Clubs, Diamonds, Hearts, Spades
  // A 2 3 4 5 6 7 8 9 10 J Q K
  // Joker Joker
  const _cards = [
    {
      symbol: 'a',
      suit: 'clubs',
      rank: 'A',
    }, {
      symbol: '2',
      suit: 'clubs',
      rank: '2',
    }, {
      symbol: '3',
      suit: 'clubs',
      rank: '3',
    }, {
      symbol: '4',
      suit: 'clubs',
      rank: '4',
    }, {
      symbol: '5',
      suit: 'clubs',
      rank: '5',
    }, {
      symbol: '6',
      suit: 'clubs',
      rank: '6',
    }, {
      symbol: '7',
      suit: 'clubs',
      rank: '7',
    }, {
      symbol: '8',
      suit: 'clubs',
      rank: '8',
    }, {
      symbol: '9',
      suit: 'clubs',
      rank: '9',
    }, {
      symbol: '10',
      suit: 'clubs',
      rank: '10',
    }, {
      symbol: 'j',
      suit: 'clubs',
      rank: 'J',
    }, {
      symbol: 'q',
      suit: 'clubs',
      rank: 'Q',
    }, {
      symbol: 'k',
      suit: 'clubs',
      rank: 'K',
    }, {
      symbol: 'a',
      suit: 'diams',
      rank: 'A',
    }, {
      symbol: '2',
      suit: 'diams',
      rank: '2',
    }, {
      symbol: '3',
      suit: 'diams',
      rank: '3',
    }, {
      symbol: '4',
      suit: 'diams',
      rank: '4',
    }, {
      symbol: '5',
      suit: 'diams',
      rank: '5',
    }, {
      symbol: '6',
      suit: 'diams',
      rank: '6',
    }, {
      symbol: '7',
      suit: 'diams',
      rank: '7',
    }, {
      symbol: '8',
      suit: 'diams',
      rank: '8',
    }, {
      symbol: '9',
      suit: 'diams',
      rank: '9',
    }, {
      symbol: '10',
      suit: 'diams',
      rank: '10',
    }, {
      symbol: 'j',
      suit: 'diams',
      rank: 'J',
    }, {
      symbol: 'q',
      suit: 'diams',
      rank: 'Q',
    }, {
      symbol: 'k',
      suit: 'diams',
      rank: 'K',
    }, {
      symbol: 'a',
      suit: 'hearts',
      rank: 'A',
    }, {
      symbol: '2',
      suit: 'hearts',
      rank: '2',
    }, {
      symbol: '3',
      suit: 'hearts',
      rank: '3',
    }, {
      symbol: '4',
      suit: 'hearts',
      rank: '4',
    }, {
      symbol: '5',
      suit: 'hearts',
      rank: '5',
    }, {
      symbol: '6',
      suit: 'hearts',
      rank: '6',
    }, {
      symbol: '7',
      suit: 'hearts',
      rank: '7',
    }, {
      symbol: '8',
      suit: 'hearts',
      rank: '8',
    }, {
      symbol: '9',
      suit: 'hearts',
      rank: '9',
    }, {
      symbol: '10',
      suit: 'hearts',
      rank: '10',
    }, {
      symbol: 'j',
      suit: 'hearts',
      rank: 'J',
    }, {
      symbol: 'q',
      suit: 'hearts',
      rank: 'Q',
    }, {
      symbol: 'k',
      suit: 'hearts',
      rank: 'K',
    }, {
      symbol: 'a',
      suit: 'spades',
      rank: 'A',
    }, {
      symbol: '2',
      suit: 'spades',
      rank: '2',
    }, {
      symbol: '3',
      suit: 'spades',
      rank: '3',
    }, {
      symbol: '4',
      suit: 'spades',
      rank: '4',
    }, {
      symbol: '5',
      suit: 'spades',
      rank: '5',
    }, {
      symbol: '6',
      suit: 'spades',
      rank: '6',
    }, {
      symbol: '7',
      suit: 'spades',
      rank: '7',
    }, {
      symbol: '8',
      suit: 'spades',
      rank: '8',
    }, {
      symbol: '9',
      suit: 'spades',
      rank: '9',
    }, {
      symbol: '10',
      suit: 'spades',
      rank: '10',
    }, {
      symbol: 'j',
      suit: 'spades',
      rank: 'J',
    }, {
      symbol: 'q',
      suit: 'spades',
      rank: 'Q',
    }, {
      symbol: 'k',
      suit: 'spades',
      rank: 'K',
    }, {
      symbol: '+',
      suit: 'joker',
      rank: 'joker',
    }, {
      symbol: '-',
      suit: 'joker',
      rank: 'joker',
    },
  ];

  const cardDescArr = [];
  const hand = props.playerHand || props.discardPile;

  for (let i = 0; i < hand.length; i += 1) {
    let symbolID = '';
    const _suit = _cards[hand[i]].suit;
    const _symbol = _cards[hand[i]].symbol;
    const _rank = _cards[hand[i]].rank;

    switch (_suit) {
      case 'diams':
        symbolID = '\u2666';
        break;
      case 'hearts':
        symbolID = '\u2665';
        break;
      case 'clubs':
        symbolID = '\u2663';
        break;
      case 'spades':
        symbolID = '\u2660';
        break;
      case 'joker':
        symbolID = 'Joker';
        break;
      default:
        break;
    }

    if (_suit !== 'joker') {
      cardDescArr.push({
        labelCN: `card rank-${_symbol} ${_suit}`,
        spanCNrank: _rank,
        spanCNsuit: symbolID,
        cardNum: hand[i],
      });
    } else {
      cardDescArr.push({
        labelCN: `card ${_suit}`,
        spanCNrank: _rank,
        spanCNsuit: symbolID,
        cardNum: hand[i],
      });
    }
  }

  const cards = [];

  for (let i = 0; i < cardDescArr.length; i += 1) {
    const { labelCN } = cardDescArr[i];
    const { spanCNrank } = cardDescArr[i];
    const { spanCNsuit } = cardDescArr[i];
    const { cardNum } = cardDescArr[i];

    cards.push(
      <li key={`player-card${i}`}>
        <label className={`${labelCN}`} id={`${cardNum}`}>
          <span className="rank">{spanCNrank}</span>
          <span className="suit">{spanCNsuit}</span>
        </label>
      </li>,
    );
  }
  return cards;
}
