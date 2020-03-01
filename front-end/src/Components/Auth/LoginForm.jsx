import React from 'react';
import { connect } from 'react-redux';
import { HANDLECHANGE } from '../../store/actions/actionTypes';

const LoginForm = ({ username, password, handleChange, loginUser }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        loginUser()
    }

    return (

        <div id="form_wrapper">
            <section id="form_left">
                <img src="https://cdn.dribbble.com/users/2057890/screenshots/6123405/arion-people-dribbble.jpg" alt="computer icon" />
            </section>
            <form onSubmit={handleSubmit} className="form_right">
                <h1>Member Login</h1>
                <section className="input_container">
                    <i className="fas fa-envelope"></i>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        id="field_email"
                        className='input_field'
                        placeholder="username"
                        onChange={handleChange}
                    />
                </section>
                <section className="input_container">
                    <i className="fas fa-lock"></i>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="***"
                        onChange={handleChange}
                        id="field_password" 
                        className='input_field'
                    />
                </section>
                <input type="submit" value="Login" id='input_submit' className='input_field' />
                <span>Forgot <a href="#"> Username / Password ?</a></span>
                <span id='create_account'>
                    <a href="#">Create your account ➡ </a>
                </span>
            </form>

        </div>
    )
}

const mapStateToProps = ({ inputReducer }) => { return { ...inputReducer } }

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: ({ target: { name, value } }) => {
            dispatch({
                type: HANDLECHANGE,
                payload: { name, value }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

{/* <h3> Log-In </h3>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={username}
                    placeholder="username"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="***"
                    onChange={handleChange}
                />
                <input type="submit" value="log-in" />
            </form> */}