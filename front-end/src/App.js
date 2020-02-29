import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import { 
    Home,
    Orders,
    Product,
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
    OrderContainer,
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
                    <PrivateRoute path='/private/:type/:id' component={ProfileContainer} />
                    <PrivateRoute path='/portal' component={PortalContainer} />
                    <Route path='/public' component={PublicContainer} />
                    <PrivateRoute path='/orders' component={OrderContainer} />
                    {/* <Route path='/public/product' component={Product} /> */}
                </Switch>
            </div>
        );
    }
}

export default App;
