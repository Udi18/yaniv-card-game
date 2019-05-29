import React from 'react';
import './css/bootstrap.css';
import './css/cards-ie.css';
import './css/cards-ie9.css';
import './css/cards.css';
import './css/App.css';


import Card from './components/card';
import Deck from './components/deck';

function App() {
  return (
    <div className="container h-100">
      <div className="row h-33 align-items-start">
		<div className="col">

		</div>
		<div className="col">
			<Card />
		</div>
		<div className="col">

		</div>
		<div className="col">
			<Card />
		</div>
		<div className="col">

		</div>
	</div>
	<div className=""></div>
	<div className="row h-33 align-items-center">
		<div className="col">
			<Card />
		</div>
		<div className="col">

		</div>
		<div className="col">
			<Deck />
		</div>
		<div className="col">

		</div>
		<div className="col">
			<Card />
		</div>
	</div>
	
	<div className="row h-33 align-items-end">
		<div className="col">
			  
		</div>
		<div className="col">

		</div>
		<div className="col">
			<Card />
		</div>
		<div className="col">

		</div>
		<div className="col">

		</div>
	</div>
	  
    </div>
  );
}

export default App;
