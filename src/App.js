import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travel</h1>
        </header>
        <Travel
          destination="Craigh na dun"
          country="Ecosse"
          photo="https://vignette.wikia.nocookie.net/outlander/images/9/90/Craigh-na-dun.jpg/revision/latest/scale-to-width-down/2000?cb=20140819013537"
          distance="1771 km"
        />
        <Travel
          destination="Saint Petersbourg"
          country="Russie"
          photo="https://photos.tui.fr/vnf/Produits/RUSCT005_smolny-circuits-russie-saint-petersbourg-tui.jpg"
          distance="3427 km"
        />
      </div>
    );
  }
}

export default App;
