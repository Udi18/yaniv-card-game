import React from 'react';
import './css/App.css';
import './css/bootstrap.css';
import './css/components.css';

import Card from './components/Card';

function App() {
  return (
    <div className="container">
      <div className="row">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
