import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { Home, About } from './Components'
import { 
    AuthContainer, 
    PrivateRoute, 
    NavbarContainer, 
    AddShowContainer, 
    AllShowsContainer, 
    UserContainer, 
    AllUsersContainer, 
    ShowContainer 
} from './Containers';

const App = () => {

    return (
        <div className="App">
            <NavbarContainer />
            <Switch>
                <Route 
                    path="/login" 
                    component={AuthContainer} 
                />
                <Route 
                    path="/signup" 
                    component={AuthContainer} 
                />
                <Route 
                    path="/about" 
                    component={About} 
                />
                <PrivateRoute 
                    path="/shows/:id" 
                    component={ShowContainer} 
                />
                <Route 
                    path="/shows" 
                    component={AllShowsContainer} 
                />
                <PrivateRoute 
                    path="/users/:id/addShow" 
                    component={AddShowContainer} 
                />
                <PrivateRoute 
                    path="/users/:id" 
                    component={UserContainer} 
                />
                <PrivateRoute 
                    path="/users" 
                    component={AllUsersContainer} 
                />
                <PrivateRoute 
                    path="/profile" 
                    component={UserContainer} 
                />
                <Route 
                    path="/" 
                    component={Home} 
                />
            </Switch>
        </div>
    );
}

export default App;
