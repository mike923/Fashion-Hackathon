import React from 'react';
import { connect } from 'react-redux'
import { HANDLECHANGE } from '../../store/actions/actionTypes';

const SignupForm = ({ username, password, avatar_url, handleChange, signupUser }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        signupUser()
    }

    return (
        <div>
            <h3> Sign-Up </h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Username"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="***"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="avatar_url"
                    value={avatar_url}
                    placeholder="https://photos.com/profile_picture.jpg"
                    onChange={handleChange}
                />
                <input type="submit" value="Signup" />
            </form>
        </div>
    )
}

const mapStateToProps = ({ ...inputReducer }) => { return { ...inputReducer }}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: ({target: {name, value}}) => {
            dispatch({
                type: HANDLECHANGE,
                payload: {name, value}
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
