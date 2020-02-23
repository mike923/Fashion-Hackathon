import React, { Component } from 'react';
import './App.css';

import { 
  Nav, 
  Home,
  Login,
  Signup,
  Orders,
  Products,
  Designers,
  Manufacturers,
} from './Components'

import { Switch, Route } from 'react-router-dom'
import { AuthContainer } from './Containers';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={AuthContainer} />
          <Route exact path='/signup' component={AuthContainer} />
          <Route exact path='/users/type' component={Designers} />
          <Route exact path='/users/type/manufacturer/:id' component={Manufacturers} />
          <Route exact path='/users/type/:id/order' component={Orders} />
          <Route exact path='/users/type/:id/product' component={Products} />
        </Switch>
      </div>
    );
  }
}

export default App;
