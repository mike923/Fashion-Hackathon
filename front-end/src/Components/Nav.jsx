import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {

    const navStyle = {
        color: 'black'
    }

    return (
        <nav>
            <h3>The Fanshion Something</h3>
            <ul className='nav-links'>
                <Link style={navStyle} to="/"><strong><li>Home</li></strong></Link>
                <Link style={navStyle} to="/login"><strong><li>login</li></strong></Link>
                <Link style={navStyle} to="/users/type"><strong><li>Designer</li></strong></Link>
                <Link style={navStyle} to="/users/type/manufacturer/:id"><strong><li>Manufacturers</li></strong></Link>
                <Link style={navStyle} to="/users/type/:id/order"><strong><li>Orders</li></strong></Link>
                <Link style={navStyle} to="/users/type/:id/product"><strong><li>Products</li></strong></Link>


            </ul>
        </nav>
    );
}

export default Nav;