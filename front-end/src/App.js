import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import { 
    Home,
    Orders,
    Products,
    DesignerProfilePage,
    Map,
} from './Components'
import { 
    AuthContainer, 
    NavbarContainer, 
    PrivateRoute, 
    PublicContainer,
    PortalContainer,
    ProfileContainer,
} from './Containers';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavbarContainer />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/login' component={AuthContainer} />
                    <Route path='/signup' component={AuthContainer} />
                    <Route path='/map' component={Map} />
                    <Route path='/public' component={PublicContainer} />
                    <Route path='/designer/public/:id' component={ProfileContainer} />
                    <PrivateRoute path='/portal' component={PortalContainer} />
                    <Route path='/type/:id/order' component={Orders} />
                    <Route path='/type/:id/product' component={Products} />
                </Switch>
            </div>
        );
    }
}

export default App;
