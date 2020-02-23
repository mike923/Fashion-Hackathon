import React from 'react'
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { SET_PREV_URL } from '../store/actions/actionTypes'

const PrivateRoute = ({isUserLoggedIn, setUser, setPrevUrl, component, ...props}) => {
    if (isUserLoggedIn) {
        return <Route {...props} component={component} />
    } else {
        console.log(props.location.pathname)
        setPrevUrl(props.location.pathname)
        return <Redirect to={'/login'} />
    }
}

const mapStateToProps = ({ authReducer }) => {
    return { ...authReducer }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPrevUrl: (url) => {
            dispatch({
                type: SET_PREV_URL,
                payload: url
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
