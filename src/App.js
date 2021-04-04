import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Form from './Components/CardForm.js'
import Navbar from './Components/Navbar.js'
import SavedCards from './Components/SavedCards.js'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route path="/saved" component={SavedCards} />
      </Switch>
    </div>
  );
}

export default App;
