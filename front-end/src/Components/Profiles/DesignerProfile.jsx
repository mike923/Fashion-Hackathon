import React from 'react'
import Product from '../Product'

const DesignerProfile = ({designer_id, username, avatar_url, products}) => {
    return (
        <div>
            <img src={avatar_url} alt={username} className='designer-profile'/>
            <h1>{username} {designer_id}</h1>
            {products.map(Product)}
        </div>
    )
}

export default DesignerProfile