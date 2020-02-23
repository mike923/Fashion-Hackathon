import React, { useEffect } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Navbar } from '../Components'
import { SET_LOADING, SET_USER, LOGOUT } from '../store/actions/actionTypes'

const NavbarContainer = ({ setUser, setLoading, logout, user, isUserLoggedIn, ...props }) => {
    useEffect(() => {
        checkUserLoggedIn()
    }, [isUserLoggedIn])

    const checkUserLoggedIn = async () => {
        console.log('Checking if user logged in')
        try {
            const { data } = await axios.get("/auth/isUserLoggedIn")
            setUser(data.payload)
        } catch (err) {
            // User does not have an active session in the backend. User is logged out so set loadingUser to false.
            if (err.message.includes(401)) {
                setLoading()
            }
        }
    }

    const logoutUser = async () => {
        console.log('logging out user')
        try {
            await axios.get('/auth/logout')
            logout()
            props.history.push('/') // Redirect user to / (home)
        } catch (err) {
            console.log('ERROR', err)
        }
    }

    return (
        <Navbar
            user_id={user ? user.id : 0}
            logoutUser={logoutUser}
            isUserLoggedIn={isUserLoggedIn}
        />
    )
}

const mapStateToProps = ({ authReducer }) => {
    return { ...authReducer }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (user) => {
            dispatch({
                type: SET_USER,
                payload: user,
            })
        },
        setLoading: () => {
            dispatch({
                type: SET_LOADING,
            })
        },
        logout: () => {
            dispatch({
                type: LOGOUT,
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavbarContainer));