import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ logoutUser, isUserLoggedIn, user_id }) => (
    <nav>
        <h3>The Fanshion Something</h3>
        <ul className='nav-links'>
            <Link style={navStyle} to="/"><strong><li>Home</li></strong></Link>
            <Link style={navStyle} to="/login"><strong><li>login</li></strong></Link>
            <Link style={navStyle} to="/users/type"><strong><li>Designer</li></strong></Link>
            <Link style={navStyle} to="/users/type/manufacturer/:id"><strong><li>Manufacturers</li></strong></Link>
            <Link style={navStyle} to="/users/type/:id/order"><strong><li>Orders</li></strong></Link>
            <Link style={navStyle} to="/users/type/:id/product"><strong><li>Products</li></strong></Link>

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
        </ul>
    </nav>
)

const navStyle = {
    color: 'black'
}

export default Navbar;

