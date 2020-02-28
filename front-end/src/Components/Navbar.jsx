import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../A9Logo.png"

const Navbar = ({ logoutUser, isUserLoggedIn, user_id }) => (
    <nav>
        <img src={Logo} alt='Logo'></img>
        <h3>Fashion Design</h3>
        <ul className='nav-links'>
            <Link style={navStyle} to="/"><strong><li>Home</li></strong></Link>
            <Link style={navStyle} to="/designer/portal"><strong><li>Designers</li></strong></Link>
            <Link style={navStyle} to="/users/type/:id/product"><strong><li>Products</li></strong></Link>

            {isUserLoggedIn
                ? (
                    <>
                        <Link style={navStyle} to="/designer/portal"><strong><li>Designer</li></strong></Link>
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
    // color: 'black'
}

export default Navbar;

