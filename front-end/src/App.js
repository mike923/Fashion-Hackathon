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

import MapContainer from './Components/Map'

import { Switch, Route } from 'react-router-dom'
import { AuthContainer, NavbarContainer } from './Containers';
import DesignsContainer from './Containers/DesignsContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavbarContainer />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={AuthContainer} />
          <Route path='/signup' component={AuthContainer} />
          <Route path='/map' component={MapContainer} />
          <Route path='/users/designer' component={DesignsContainer} />
          <Route path='/users/type/manufacturer' component={Manufacturers} />
          <Route path='/users/type/:id/order' component={Orders} />
          <Route path='/users/type/:id/product' component={Products} />
        </Switch>
      </div>
    );
  }
}

export default App;
