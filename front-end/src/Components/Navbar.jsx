import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ logoutUser, isUserLoggedIn, user_id }) => (
    <nav>
        <h3>The Fanshion Something</h3>
        <ul className='nav-links'>
            <Link style={navStyle} to="/"><strong><li>Home</li></strong></Link>
            <Link style={navStyle} to="/users/type"><strong><li>Designer</li></strong></Link>
            <Link style={navStyle} to="/users/type/:id/product"><strong><li>Products</li></strong></Link>

            {isUserLoggedIn
                ? (
                    <>
                        <Link style={navStyle} to="/order"><strong><li>Orders</li></strong></Link>
                        <Link style={navStyle} to="/users/type/manufacturer"><strong><li>Manufacturers</li></strong></Link>

                        <button onClick={logoutUser}>Log-out</button>
                    </>
                ) : (
                    <>
                        <Link style={navStyle} to="/login"><strong><li>Log-In</li></strong></Link>
                        <Link style={navStyle} to="/signup"><strong><li>Sign-Up</li></strong></Link>
                    </>
                )}
        </ul>
    </nav>
)

const navStyle = {
    color: 'black'
}

export default Navbar;

