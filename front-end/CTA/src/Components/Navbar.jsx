import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ logoutUser, isUserLoggedIn, user_id }) => (
    <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/about">About</Link>{" "}
        <Link to="/shows">Shows</Link>{" "}
        {isUserLoggedIn 
        ? (
            <>
                <Link to={`/users/${user_id}/addShow`}>Add Show</Link>{" "}
                <Link to="/users">Users</Link>{" "}
                <Link to={`/users/${user_id}`}>Profile</Link>{" "}
                <button onClick={logoutUser}>Log-out</button>
            </>
        ) : (
            <>
                <Link to="/login">Log-In</Link>{" "}
                <Link to="/signup">Sign-Up</Link>{" "}
            </>
        )}
    </nav>
)

export default Navbar;

