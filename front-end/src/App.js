import React, { Component } from 'react';
import './App.css';

import Nav from './Components/Nav'
import Home from './Components/Home'

import { Switch, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    );
    }
}

export default App;
