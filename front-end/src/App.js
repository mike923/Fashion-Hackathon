import React, { Component } from 'react';
import './App.css';

import Nav from './Components/Nav'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Designer from './Components/Designers'
import Manufacturers from './Components/Manufacturers'
import Orders from './Components/Orders'
import Products from './Components/Products'


import { Switch, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/users/type' component={Designer} />
          <Route exact path='/users/type/manufacturer/:id' component={Manufacturers} />
          <Route exact path='/users/type/:id/order' component={Orders} />
          <Route exact path='/users/type/:id/product' component={Products} />
        </Switch>
      </div>
    );
  }
}

export default App;
