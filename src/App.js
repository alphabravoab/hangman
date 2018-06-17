import React, { Component } from 'react';
import Hangmanboard from './components/hangmanboard';
import { Route } from 'react-router-dom';
import StartPage from './components/StartPage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <main>
          <Route exact path="/" component={ StartPage } />
          <Route exact path="/hangman" component={ Hangmanboard } />
        </main>



      </div>
    );
  }
}

export default App;
