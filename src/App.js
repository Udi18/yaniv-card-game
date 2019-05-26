import React from 'react';
import './css/bootstrap.css';
import './css/bootstrap.css.map';
import './css/components.css';
import './css/cards-ie.css';
import './css/cards-ie9.css';
import './css/cards.css';
import './css/App.css';


import Hand from './components/hand';

function App() {
  return (
    <div className="container">
      <div className="row">
		  <div className="col">
		  	<Hand />
		  </div>
		  <div className="col">
		  	<Hand />
		  </div>
		  <div className="col">
		  	<Hand />
		  </div>
		  <div className="col">
		  	<Hand />
		  </div>
		  <div className="col">
		  	<Hand />
		  </div>
		  
      </div>
    </div>
  );
}

export default App;
