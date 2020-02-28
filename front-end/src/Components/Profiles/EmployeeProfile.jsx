import React from 'react'
import Product from '../Product'

const EmployeeProfile = ({employee_id, username, avatar_url, products}) => {
    return (
        <div>
            <img src={avatar_url} alt={username}/>
            <h1>{username} {employee_id}</h1>
            {products.map(Product)}
        </div>
    )
}

export default EmployeeProfile