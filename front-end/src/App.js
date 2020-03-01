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
import { connect } from 'react-redux';

class App extends Component {
    render() {
        console.log(this.props.isUserLoggedIn)
        return (
            <div>
                <NavbarContainer />
                <div className="App">
                    <Switch>
                        <Route path='/login' component={AuthContainer} />
                        <Route path='/signup' component={AuthContainer} />
                        <Route path='/map' component={Map} />
                        <PrivateRoute path='/private/:type/:id' component={ProfileContainer} />
                        <PrivateRoute path='/portal' component={PortalContainer} />
                        {/* <Route path='/public' component={PublicContainer} /> */}
                        <PrivateRoute path='/orders' component={OrderContainer} />
                        {/* <Route path='/public/product' component={Product} /> */}
                        <Route 
                            path='/'
                            render={(props) => {
                                return this.props.isUserLoggedIn
                                    ? <ProfileContainer {...props} /> 
                                    : <Home {...props} />
                            }} 
                        />
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ authReducer }) => {
    return { ...authReducer }
}

export default connect(mapStateToProps)(App);
