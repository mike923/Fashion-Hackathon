import React from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import { LoginForm, SignupForm } from '../Components'
import { SET_USER } from '../store/actions/actionTypes';

const AuthContainer = ({ isUserLoggedIn, setUser, prevURL, ...props}) => {

    const signupUser = async () => {
        try {
            await axios.post('/auth/signup', props)
            loginUser()
        } catch (err) {
            console.log('ERROR', err)
        }
    }

    const loginUser = async () => {
        try {
            const { data: { payload } } = await axios.post('/auth/login', props)
            setUser(payload)
        } catch (err) {
            console.log('ERROR', err)
        }
    }

    return (
        <div>
            <h2>Welcome</h2>
            {isUserLoggedIn
                ? <Redirect to={prevURL ? prevURL : '/portal'} />
                : (
                    <Switch>
                        <Route 
                            path="/signup" 
                            render={() => <SignupForm signupUser={signupUser} />} 
                        />
                        <Route 
                            path="/login" 
                            render={() => <LoginForm loginUser={loginUser} />} 
                        />
                    </Switch>
                )
            }
        </div>
    )
}

const mapStateToProps = ({authReducer, inputReducer}) => {
    return { ...authReducer, ...inputReducer }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (user) => {
            dispatch({
                type: SET_USER,
                payload: user,
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
