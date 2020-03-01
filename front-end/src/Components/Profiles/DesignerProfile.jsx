import React from 'react'
import Product from '../Product'
import { Link } from 'react-router-dom'

const DesignerProfile = ({designer_id, username, avatar_url, products}) => {
    return (
        <div>
            <img src={avatar_url} alt={username} className='designer-profile'/>
            <h1>{username} {designer_id}</h1>
            <button>{
                <Link to='/private/create'>
                Create
                </Link>
            }</button>
            {products.map(Product)}
        </div>
    )
}

export default DesignerProfile