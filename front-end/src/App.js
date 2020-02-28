import React, { Component } from 'react';
import './App.css';

import { 
    Home,
    Orders,
    Products,
    Manufacturers,
} from './Components'

import MapContainer from './Components/Map'
import { Switch, Route } from 'react-router-dom'
import { AuthContainer, NavbarContainer, PrivateRoute,PublicContainer } from './Containers';
import DesignerPortalContainer from './Containers/DesignerPortalContainer';
import DesignerProfile from './Components/DesignerProfilePage';

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
                    <Route path='/designer/public/:id' component={DesignerProfile} />
                    <Route path='/designer/public' component={PublicContainer} />
                    <PrivateRoute path='/designer/portal' component={DesignerPortalContainer} />
                    <Route path='/type/manufacturer' component={Manufacturers} />
                    <Route path='/type/:id/order' component={Orders} />
                    <Route path='/type/:id/product' component={Products} />
                </Switch>
            </div>
        );
    }
}

export default App;
