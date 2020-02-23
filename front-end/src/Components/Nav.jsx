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
            </ul>
        </nav>
    );
}

export default Nav;